const modal=document.querySelector('#modal');const toast=document.querySelector('.toast');
document.querySelectorAll('.js-open').forEach(b=>b.addEventListener('click',()=>modal.showModal()));
document.querySelector('.close').addEventListener('click',()=>modal.close());
function done(e){e.preventDefault();modal.close();toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3200);e.target.reset()}
document.querySelector('#lead').addEventListener('submit',done);document.querySelector('#modal-form').addEventListener('submit',done);
