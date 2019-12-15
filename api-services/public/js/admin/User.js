function getAllUsers(){
    if(sessionStorage.getItem("matrik_num")=='sucessfull'){
    req=new XMLHttpRequest();
    req.open("GET",'/api/v1/users',true);
    req.send();
    req.onload=function(){
        json=JSON.parse(req.responseText);
        
        var body="<div class='container-fluid'>\
        <div class='row'>\
            <div class='col-sm-12'>\
                <div class='card'>\
                <div class='card-body'>\
        <div id='basicScenario' class='product-physical jsgrid' style='position: relative; height: auto; width: 100%;'>\
            <div class='jsgrid-grid-header jsgrid-header-scrollbar'>\
                <table class='jsgrid-table'>\
                    <tr class='jsgrid-header-row'>\
                        <th class='jsgrid-header-cell jsgrid-header-sortable' style='width: 50px;'>First Name</th>\
                        <th class='jsgrid-header-cell jsgrid-header-sortable' style='width: 50px;'>Last Name</th>\
                        <th class='jsgrid-header-cell jsgrid-header-sortable' style='width: 50px;'>Email</th>\
                        <th class='jsgrid-header-cell jsgrid-header-sortable' style='width: 50px;'>Phone Number</th>\
                        <th class='jsgrid-header-cell jsgrid-header-sortable' style='width: 50px;'>Role</th>\
                    </tr>\
                </table>\
            </div>\
            <div class='jsgrid-grid-body'>\
                <table class='jsgrid-table'>\
                    <tbody>"
                    for(var i=json.users.length-1;i>=0;i--){
                        body+="<tr class='jsgrid-alt-row' style=''>\
                        <td class='jsgrid-cell' style='width: 50px;'>"+json.users[i].first_name+"</td>\
                        <td class='jsgrid-cell' style='width: 50px;'>"+json.users[i].last_name+"</td>\
                        <td class='jsgrid-cell' style='width: 50px;'>"+json.users[i].email+"</td>\
                        <td class='jsgrid-cell' style='width: 50px;'>"+json.users[i].phone_number+"</td>"
                        if(json.users[i].role_id==1)
                        body+="<td class='jsgrid-cell' style='width: 50px;'>Admin</td></tr>"
                        else if(json.users[i].role_id==0)
                        body+="<td class='jsgrid-cell' style='width: 50px;'>Customer</td></tr>"
                        
    
                    }    
                   body+="</tbody>\
                </table>\
            </div>\
        </div>\
    </div>\
    </div>\
            </div>\
        </div>\
    </div>"

        
        
        document.getElementById('mainContainer').innerHTML=body;
        document.getElementById('mainHeader').innerHTML="Add Category"
        
    };
}
else
window.location.replace("admin/login.ejs"); 
}

function logout(){
    sessionStorage.removeItem("matrik_num");
    window.location.replace("admin/login.ejs");
}