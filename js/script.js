  function confirmarEnvio() {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Deseja continuar com o envio?',
      icon: 'question',
      color: '#fff' ,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
      background: '#3852DB'
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("form").submit();
      }
    });
  
    return false; 
  }


