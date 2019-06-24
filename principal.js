        firebase.initializeApp({
            apiKey: "AIzaSyAp8hM1_awR00OcuSUpWJsa1Fy7pFprQt0",
            authDomain: "eva2-e7262.firebaseapp.com",
            databaseURL: "https://eva2-e7262.firebaseio.com",
            projectId: "eva2-e7262",
            storageBucket: "eva2-e7262.appspot.com",
            messagingSenderId: "932398984498",
            appId: "1:932398984498:web:d22bdb35cf0bd01b"
        
        });

        // Initialize Cloud Firestore through Firebase
        var db = firebase.firestore();

        function agregardatos(){
            
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var edad = document.getElementById("edad").value;
            var bandera=0;
            if ( document.getElementById("nombre").value.length == 0){ bandera=1;}
            if ( document.getElementById("apellido").value.length == 0){ bandera=1;}
            if ( document.getElementById("edad").value.length == 0){ bandera=1;}
            if(bandera===0){
            db.collection("usuarios").add({first: nombre,last: apellido,born: edad})
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        }else{ alert('Ingrese informacion')}
        
        }

        function eliminardatos(valor){
        
        db.collection("usuarios").doc(valor).delete().then(function() {
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
              
      
    }
         function todoslosdatos(){
            db.collection("usuarios").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().first + "-" + doc.data().last + "-" + doc.data().born);
                });
            });
            }
        function modificardatos(){

            var id = document.getElementById("id").value;
            var nombre = document.getElementById("nombre").value;
            var apellido = document.getElementById("apellido").value;
            var edad = document.getElementById("edad").value;
            var bandera=0;

            if ( document.getElementById("nombre").value.length == 0){ bandera=1;}
            if ( document.getElementById("apellido").value.length == 0){ bandera=1;}
            if ( document.getElementById("edad").value.length == 0){ bandera=1;}

            if(bandera===0){
            var modificaDoc=db.collection('usuarios').doc(id);
            modificaDoc.set({
                first : nombre, last : apellido , born : edad
            });
            }else{ alert('Ingrese informacion') }

        }

        
        function getQueryVariable(variable)
        {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    if(pair[0] == variable){return pair[1];}
            }
            return(false);
        }
        function grabaurl(url2){
            db.collection("imagenes").add({url:url2})
        }