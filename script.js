function generateQRCode() {
    const default_url='upi://pay'
    const upid='?pa='+document.getElementById('upid').value
    const name_='&pn='+document.getElementById('name_').value
    const amount='&am='+document.getElementById('amount').value
    const updated_upid = upid.substring(upid.indexOf("=") + 1);
    const updated_name =name_.substring(name_.indexOf("=") + 1);
    const updated_amount =amount.substring(amount.indexOf("=") + 1);
    const url_name=name_.trim().replace(/ /g, '%20');

    document.getElementById('update_upid').innerText=updated_upid.trim();
    document.getElementById('update_name').innerText='';
    document.getElementById('update_amount').innerText='';

    let all=default_url+upid
    if(name_!='&pn='){

        all=all+url_name
        document.getElementById('update_name').innerText=updated_name
    }
    if(amount!='&am='){
        all=all+amount
        document.getElementById('update_amount').innerText=updated_amount
    }
    alert(all)
    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        data: all,
        dotsOptions: {
            color: "#000",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#fff",
        }
    });

    document.getElementById('qrCode').innerHTML = "";
    qrCode.append(document.getElementById('qrCode'));
}
