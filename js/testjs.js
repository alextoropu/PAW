$(document).ready(function () {

    $(function() {

        $("#jsGrid").jsGrid({
            height: "90%",
            width: "100%",

            filtering: true,
            editing: true,
            sorting: true,
            paging: true,
            autoload: true,

            pageSize: 15,
            pageButtonCount: 5,

            deleteConfirm: "Do you really want to delete the client?",


            fields: [
                { name: "First Name", type: "text", width: 200 },
                { name: "Last Name", type: "text", width: 200 },
                { name: "Address", type: "text", width: 200 },
                { name: "Laboratory", type: "text", width: 200 },
                { type: "control" }
            ]
        });

    });
});