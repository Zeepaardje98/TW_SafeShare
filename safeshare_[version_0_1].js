Incoming = {
    inc_id: null,
    tag: null,
    target_id: null,
    source_id: null,
    player: null,
    distance: null,
    arrival: null,
    init: function(inc_id, tag, target_id, source_id, player, distance, arrival) {
        this.inc_id = id;
        this.tag = tag;
        this.target_id = doel;
        this.source_id = herkomst;
        this.player = speler;
        this.distance = afstand;
        this.arrival = aankomst;
    }
}

IncSharer = {
    incs: [],
    incs_shared: null,
    init: null,
    retrieve_incs: function() {
        var incoming_table = document.getElementById("incomings_table");
        var parent = this;
        $("#incomings_table tr.nowrap").each(function() {
            var info = this.getElementsByTagName("td");

            var id = info[0].getElementsByTagName("span")[0].data-id;
            var tag = info[0].innerText;
            source_id =
            console.log(id, tag);

        });
    }
}

/* Uses a regular expression to find the coordinate of a village name */
function getVillageCoord(name) {
    var re = /\((.*?)\|(.*?)\)/g
    return name.match(re);
}


IncSharer.retrieve_incs();
