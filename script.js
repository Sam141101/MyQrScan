let html5QrCode = new Html5Qrcode("myQrReader");


async function openScanCamera() {
    util.replaceClassElement(".frameQrReader", "d-none", "d-flex", "one");

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
        /* handle success */
        if (confirm("Do you want to go to this link: " + decodedText + "?")) {
            window.location.href = decodedText; // Điều hướng đến liên kết khi nhấn "OK"
        }
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    // If you want to prefer front camera
    // html5QrCode.start({ facingMode: "user" }, config, qrCodeSuccessCallback);
    html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
}


async function stopScanning() {
    // html5QrCode.stop({ facingMode: "environment" }, config, handleStopReader)
    html5QrCode.stop().then((ignore) => {
        // QR Code scanning is stopped.
        const display = util.getElements(".frameQrReader")
        display.style.display = "none"
        const hide = util.getElements("#showQrReader")
        hide.style.display = "block"


        util.replaceClassElement(".frameQrReader", "d-block", "d-none", "one");
    }).catch((err) => {
        // Stop failed, handle it.
    });
}
