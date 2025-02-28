


function run() {

    let eng = Number(document.getElementById("eng").value)
    let maths = Number(document.getElementById("maths").value)
    let phy = Number(document.getElementById("phy").value)



    if (eng == "" || maths == "" || phy == "") {
        alert("enter all marks")

    }

    else if (eng >= 98 || maths >= 98 || phy >= 98) {
        alert("max. Markd 98")
    }

    else {
        let totalMarks = 300
        let obtvalue = eng + maths + phy
        document.getElementById("obt").innerHTML = obtvalue

        let percentage = obtvalue / totalMarks * 100
        document.getElementById("per").innerHTML = percentage + "%"
    }

}