/**********************************************************************************

settings changer (settings.html)

**********************************************************************************/
/*document.getElementById('oa1').style.display = 'none';*/
document.getElementById('ob1').style.display = 'none';
/*document.getElementById('oa2').style.display = 'none';*/
document.getElementById('ob2').style.display = 'none';
document.getElementById('oc2').style.display = 'none';


function optiona(x) {
    if (document.getElementById('optiona' + x).checked) {
        document.getElementById('oa' + x).style.display = 'inline-block';
        document.getElementById('opta' + x).classList.add("checkedoption");
        if (document.getElementById('optc2')) {
            document.getElementById('optc2').style.display = 'none';
        }
    }

    if (document.getElementById('ob' + x)) {
        document.getElementById('ob' + x).style.display = 'none';
        document.getElementById('optb' + x).classList.remove("checkedoption");
    }

    if (document.getElementById('oc' + x)) {
        document.getElementById('oc' + x).style.display = 'none';
        document.getElementById('opta' + x).classList.remove("checkedoption");
    }
}

function optionb(x) {
    if (document.getElementById('optionb' + x).checked) {
        document.getElementById('ob' + x).style.display = 'inline-block';
        document.getElementById('optb' + x).classList.add("checkedoption");
    }

    if (document.getElementById('oa' + x)) {
        document.getElementById('oa' + x).style.display = 'none';
        document.getElementById('opta' + x).classList.remove("checkedoption");
    }

    if (document.getElementById('oc' + x)) {
        document.getElementById('oc' + x).style.display = 'none';
        document.getElementById('optc' + x).classList.remove("checkedoption");
    }
}

function optionc(x) {
    if (document.getElementById('optionc' + x).checked) {
        document.getElementById('oc' + x).style.display = 'inline-block';
        document.getElementById('optc' + x).classList.add("checkedoption");
    }

    if (document.getElementById('oa' + x)) {
        document.getElementById('oa' + x).style.display = 'none';
        document.getElementById('opta' + x).classList.remove("checkedoption");
    }

    if (document.getElementById('ob' + x)) {
        document.getElementById('ob' + x).style.display = 'none';
        document.getElementById('optb' + x).classList.remove("checkedoption");
    }
}

/**********************************************************************************

user list script (index.html)

**********************************************************************************/

/*context-menu*/
