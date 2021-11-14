const gerarQr = document.querySelector('.gerar-qr').addEventListener('click', gerarQRCode);

function gerarQRCode() {
  const inputUser = document.querySelector('textarea').value;
  if (inputUser == '') {
    alert("Adicione um valor!")
  } else {
    const googleCharApi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=';
    const conteudoQRCode = googleCharApi + inputUser;
    document.querySelector('.qrcode-img').src = conteudoQRCode;
  }
}