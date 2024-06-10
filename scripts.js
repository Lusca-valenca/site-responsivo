
document.addEventListener('DOMContentLoaded', () => {
    // Ação 1: Alterar o conteúdo ao clicar em uma imagem
    document.getElementById('photo1').addEventListener('click', () => {
        alert('Você clicou na Foto 1');
    });

    
    document.getElementById('photo2').addEventListener('mouseover', () => {
        document.getElementById('photo2').style.border = '10px solid black';
    });

    document.getElementById('photo2').addEventListener('mouseout', () => {
        document.getElementById('photo2').style.border = 'none';
    });

  
    const textSection = document.querySelector('.text-section');
    const newTextBlock = document.createElement('div');
    newTextBlock.className = 'text-block';
    newTextBlock.textContent = 'O menino Vini tem tudo para ser o melhor do mundo esse ano e ganhar essa tão sonhada bola de ouro depois de uma temporada excepcional e o título da orelhuda Champions League de 2023/2024';

    const button = document.createElement('button');
    button.textContent = 'Adicionar Texto';
    button.addEventListener('click', () => {
        textSection.appendChild(newTextBlock);
    });

    document.body.appendChild(button);
});