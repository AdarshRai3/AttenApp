$(document).ready(function() {
    $('.table').DataTable({
        "pagingType": "full_numbers",
        "pageLength": 10,
        "searching": true,
        "language": {
            "search": "Filter records:"
        }
    });
});

$(document).ready(function() {
   
    $('#tableSearch').on('keyup', function() {
        table.search(this.value).draw();
    });
});
