$(document).ready(function(){
    var i=1;
    $("#myBtn").click(function(){
        $("#myModal").modal();
    });
    function KiemtraTen(){
        var re=/^([A-Z]{1}[a-z]+ ?)+$/;
        if($("#txtHT").val()==""){
            $("#tbHT").html("bat buoc nhap");
            return false;
        }
        if(!re.test($("#txtHT").val())){
            $("#tbHT").html("Nhap theo mau: Tran Thanh Hung");
            return false;
        }
        $("#tbHT").html("*");
        return true;
    }
    $("#txtHT").blur(KiemtraTen);
    function KiemtraSCMND(){
        var re=/^[0-9]{9}$/;
        if($("#txtMa").val()==""){
            $("#tbMa").html("bat buoc nhap!");
            return false;
        }
        if(!re.test($("#txtMa").val())){
            $("#tbMa").html("Nhap lai! ");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KiemtraSCMND);
    function KiemtraQQ(){
        var re=/^[A-Z]+$/;
        if($("#txtQQ").val()==""){
            $("#tbQQ").html("bat buoc nhap!");
            return false;
        }
        if(!re.test($("#txtQQ").val())){
            $("#tbQQ").html("Nhap lai! ");
            return false;
        }
        $("#tbQQ").html("*");
        return true;
    }
    $("#txtQQ").blur(KiemtraQQ);
    function KiemtraEmail(){
        var re=/^\w+@iuh\.edu\.vn$/;
        if($("#txtEmail").val()==""){
            $("#tbEmail").html("bat buoc nhap!");
            return false;
        }
        if(!re.test($("#txtEmail").val())){
            $("#tbEmail").html("Nhap lai! ");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KiemtraEmail);
    $("#myModal").modal("hide");
})