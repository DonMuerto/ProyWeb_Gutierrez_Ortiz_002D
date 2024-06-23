const rowsPerPage = 6;
let currentPage = 1;
const table = document.getElementById('tb_reservas');
const tbody = table.querySelector('tbody');
const rows = Array.from(tbody.rows);
const totalPages = Math.ceil(rows.length / rowsPerPage);
let miSpan = document.getElementById("miSpan");

function displayPage(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    
    rows.forEach((row, index) => {
        row.style.display = index >= start && index < end ? '' : 'none';
    });

    document.getElementById('prevBtn').classList.toggle('disabled', page === 1);
    document.getElementById('nextBtn').classList.toggle('disabled', page === totalPages);
}


function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        page.textContent = currentPage;
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        page.textContent = currentPage;
    }
}



displayPage(currentPage);