/* 
    Menú de nevegación despelgable
*/

const $detailsList = document.querySelectorAll('details');

$detailsList.forEach(($details)=>{
    const $summary = $details.querySelector('summary');
    $summary.addEventListener('click', expand);
})

function expand() {
    $detailsList.forEach(($details)=>{
        $details.removeAttribute('open');
    })
}