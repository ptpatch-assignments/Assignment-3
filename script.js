var _row = null;
const abutton = document.getElementsByClassName('.addbutton');

function addStudent(){
    var sid = document.getElementById('sid').value;
    if (sid > 100 || sid < 1 ){
        stopAdd()
    }
    var fname = document.getElementById('fname').value;
    if (fname === '' || fname.length > 20 || fname.length < 2 || isAlphab(fname)){
        stopAdd()
    }
    var lname = document.getElementById('lname').value;
    if (lname === '' || lname.length > 20 || lname.length < 2 || isAlphab(lname)){
        stopAdd()
    }
    var dob = document.getElementById('dob').value;
    var tuition = document.getElementById('tuition').value;
    if (tuition > 50000 || tuition < 0){
        stopAdd()
    }
    var cid = document.getElementById('cid').value;
    if (cid <= 0 || cid > 30){
        stopAdd()
    }
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML = sid;
    cell2.innerHTML = fname;
    cell3.innerHTML = lname;
    cell4.innerHTML = dob;
    cell5.innerHTML = tuition;
    cell6.innerHTML = cid;
    $(cell7).replaceWith("<td><button class='editbutton' onclick='studentEdit(this);'>Edit</button><button class='savebutton' onclick='studentSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function addSpc(){
    var sfn = document.getElementById('sfn').value;
    if (sfn === '' || sfn.length > 20 || sfn.length < 3 || isAlphab(sfn)){
        stopAdd()
    }
    var sln = document.getElementById('sln').value;
    if (sln === '' || sln.length > 20 || sln.length < 3 || isAlphab(sln)){
        stopAdd()
    }
    var cname = document.getElementById('cname').value;
    if (cname === '' || cname.length > 20 || cname.length < 2){
        stopAdd()
    }
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = sfn;
    cell2.innerHTML = sln;
    cell3.innerHTML = cname;
    $(cell4).replaceWith("<td><button class='editbutton' onclick='spcEdit(this);'>Edit</button><button class='savebutton' onclick='spcSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function addTrainer(){
    var tid = document.getElementById('tid').value;
    if (tid <= 0 || tid > 100){
        stopAdd()
    }
    var tfn = document.getElementById('tfn').value;
    if (tfn === '' || tfn.length > 20 || tfn.length < 2 || isAlphab(tfn)){
        stopAdd()
    }
    var tln = document.getElementById('tln').value;
    if (tln === '' || tln.length > 20 || tln.length < 2 || isAlphab(tln)){
        stopAdd()
    }
    var tstream = document.getElementById('tstream').value;
    if (tstream === '' || tstream.length > 20 || tstream.length < 1){
        stopAdd()
    }
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = tid;
    cell2.innerHTML = tfn;
    cell3.innerHTML = tln;
    cell4.innerHTML = tstream;
    $(cell5).replaceWith("<td><button class='editbutton' onclick='trainerEdit(this);'>Edit</button><button class='savebutton' onclick='trainerSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function addTpc(){
    var tfn = document.getElementById('tfn').value;
    if (tfn === '' || tfn.length > 20 || tfn.length < 2 || isAlphab(tfn)){
        stopAdd()
    }
    var tln = document.getElementById('tln').value;
    if (tln === '' || tln.length > 20 || tln.length < 2 || isAlphab(tln)){
        stopAdd()
    }
    var cname = document.getElementById('cname').value;
    if (cname === '' || cname.length > 20 || cname.length < 2){
        stopAdd()
    }
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = tfn;
    cell2.innerHTML = tln;
    cell3.innerHTML = cname;
    $(cell4).replaceWith("<td><button class='editbutton' onclick='tpcEdit(this);'>Edit</button><button class='savebutton' onclick='tpcSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function addCourse(){
    var cid = document.getElementById('cid').value;
    if (cid <= 0 || cid > 30){
        stopAdd()
    }
    var cname = document.getElementById('cname').value;
    if (cname === '' || cname.length > 20 || cname.length < 2){
        stopAdd()
    }
    var cstream = document.getElementById('cstream').value;
    if (cstream === '' || cstream.length > 20 || cstream.length < 2){
        stopAdd()
    }
    var ctype = document.getElementById('ctype').value;
    if (ctype === '' || ctype.length > 30 || ctype.length < 2 || isAlphab(ctype)){
        stopAdd()
    }
    var sdate = document.getElementById('sdate').value;
    var edate = document.getElementById('edate').value;
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    cell1.innerHTML = cid;
    cell2.innerHTML = cname;
    cell3.innerHTML = cstream;
    cell4.innerHTML = ctype;
    cell5.innerHTML = sdate;
    cell6.innerHTML = edate;
    $(cell7).replaceWith("<td><button class='editbutton' onclick='courseEdit(this);'>Edit</button><button class='savebutton' onclick='courseSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function addAss(){
    var aid = document.getElementById('aid').value;
    if (aid <= 0 || aid > 30){
        stopAdd()
    }
    var adesc = document.getElementById('adesc').value;
    if (adesc === '' || adesc.length > 30 || adesc.length < 2 || isAlphab(adesc)){
        stopAdd()
    }
    var sdate = document.getElementById('sdate').value;
    var omark = document.getElementById('omark').value;
    if (omark < 0 || omark > 100){
        stopAdd()
    }
    var tmark = document.getElementById('tmark').value;
    if (tmark < 0 || tmark > 100){
        stopAdd()
    }
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    cell1.innerHTML = aid;
    cell2.innerHTML = adesc;
    cell3.innerHTML = sdate;
    cell4.innerHTML = omark;
    cell5.innerHTML = tmark;
    $(cell6).replaceWith("<td><button class='editbutton' onclick='assEdit(this);'>Edit</button><button class='savebutton' onclick='assSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function addApc(){
    var adesc = document.getElementById('adesc').value;
    if (adesc === '' || adesc.length > 30 || adesc.length < 2 || isAlphab(adesc)){
        stopAdd()
    }
    var cname = document.getElementById('cname').value;
    if (cname === '' || cname.length > 20 || cname.length < 2){
        stopAdd()
    }
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.innerHTML = adesc;
    cell2.innerHTML = cname;
    $(cell3).replaceWith("<td><button class='editbutton' onclick='apcEdit(this);'>Edit</button><button class='savebutton' onclick='apcSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function addAsc(){
    var adesc = document.getElementById('adesc').value;
    if (adesc === '' || adesc.length > 30 || adesc.length < 2 || isAlphab(adesc)){
        stopAdd()
    }
    var sfn = document.getElementById('sfn').value;
    if (sfn === '' || sfn.length > 20 || sfn.length < 2 || isAlphab(sfn)){
        stopAdd()
    }
    var sln = document.getElementById('sln').value;
    if (sln === '' || sln.length > 20 || sln.length < 2 || isAlphab(sln)){
        stopAdd()
    }
    var cname = document.getElementById('cname').value;
    if (cname === '' || cname.length > 20 || cname.length < 2){
        stopAdd()
    }
    table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length-2);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    cell1.innerHTML = adesc;
    cell2.innerHTML = sfn;
    cell3.innerHTML = sln;
    cell4.innerHTML = cname;
    $(cell5).replaceWith("<td><button class='editbutton' onclick='ascEdit(this);'>Edit</button><button class='savebutton' onclick='ascSave();'>Save</button><button class='delbutton' onclick='rowDelete(this);'>Delete</button></td>");
}

function studentEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#sid").val($(cols[0]).text());
    $("#fname").val($(cols[1]).text());
    $("#lname").val($(cols[2]).text());
    $("#dob").val($(cols[3]).text());
    $("#tuition").val($(cols[4]).text());
    $("#cid").val($(cols[5]).text());
}

function spcEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#sfn").val($(cols[0]).text());
    $("#sln").val($(cols[1]).text());
    $("#cname").val($(cols[2]).text());
}

function trainerEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#tid").val($(cols[0]).text());
    $("#tfn").val($(cols[1]).text());
    $("#tln").val($(cols[2]).text());
    $("#tstream").val($(cols[3]).text());
}

function tpcEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#tfn").val($(cols[0]).text());
    $("#tln").val($(cols[1]).text());
    $("#cname").val($(cols[2]).text());
}

function courseEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#cid").val($(cols[0]).text());
    $("#cname").val($(cols[1]).text());
    $("#cstream").val($(cols[2]).text());
    $("#ctype").val($(cols[3]).text());
    $("#sdate").val($(cols[4]).text());
    $("#edate").val($(cols[5]).text());
}

function assEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#aid").val($(cols[0]).text());
    $("#adesc").val($(cols[1]).text());
    $("#sdate").val($(cols[2]).text());
    $("#omark").val($(cols[3]).text());
    $("#tmark").val($(cols[4]).text());
}

function apcEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#adesc").val($(cols[0]).text());
    $("#cname").val($(cols[1]).text());
}

function ascEdit(ctl){
    _row = $(ctl).parents("tr");
    var cols = _row.children("td");
    $("#adesc").val($(cols[0]).text());
    $("#sfn").val($(cols[1]).text());
    $("#sln").val($(cols[2]).text());
    $("#cname").val($(cols[3]).text());
}

function studentSave(){
    $(_row).after(addStudent());
    $(_row).remove();
    cellClear();
}

function spcSave(){
    $(_row).after(addSpc());
    $(_row).remove();
    cellClear();
}

function trainerSave(){
    $(_row).after(addTrainer());
    $(_row).remove();
    cellClear();
}

function tpcSave(){
    $(_row).after(addTpc());
    $(_row).remove();
    cellClear();
}

function courseSave(){
    $(_row).after(addCourse());
    $(_row).remove();
    cellClear();
}

function assSave(){
    $(_row).after(addAss());
    $(_row).remove();
    cellClear();
}

function apcSave(){
    $(_row).after(addApc());
    $(_row).remove();
    cellClear();
}

function ascSave(){
    $(_row).after(addAsc());
    $(_row).remove();
    cellClear();
}

function cellClear(){
    $(".clearme").val("");
}

function rowDelete(row){
    var choice = confirm("Confirm deletion");
    if (choice){
    $(row).parents("tr").remove();
    }
}

function stopAdd(){
    alert('Please enter valid data.');
    abutton.addEventListener('click', (e) => {
        e.preventDefault()});
}

function isAlphab(str){
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var count = 0;
    str = str.toUpperCase();
    for (var i = 0; i < str.length; i++) {
        for (var x = 0; x < alphabet.length; x++) {
            if (str[i] == alphabet[x]) {
                count += 1;
            }
        }
    }
    if (count != str.length) {
        return true;
    }
    return false;
}