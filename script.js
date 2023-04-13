const BASE_URL = "https://www.brooklynmuseum.org/api/v2/collection"
const APIKEY = "LddS5grYi1V92qRgwQKDukL1WhamLTQz"


// american addresses: "https://www.brooklynmuseum.org/api/v2/collection/9"
const americanArtContainer = document.querySelector(".american-art-cards")


const americanData = $.ajax({
    url: 'https://www.brooklynmuseum.org/api/v2/collection/9/highlight/',
    type: 'GET',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('api_key', APIKEY);
    },
    data: {},
    success: function (results) {
        const data = results.data
        // console.log(data)
        let idArray = []

        for (let i = 0; i < data.length; i++) {
            idArray.push(data[i].id)    
        }
            console.log(idArray)
        for (i in idArray) {

            const americanData2 = $.ajax({

                    url: `https://www.brooklynmuseum.org/api/v2/object/${idArray[i]}/image`,
                    type: 'GET',
                    beforeSend: function (xhr) {
                            xhr.setRequestHeader('api_key', APIKEY);
                        },
                        data: {},
                        success: function (results) {
                            var img = document.createElement("img")
                            img.src = `https://${results.data[0].standard_size_url}`
                            const text = `https://${results.data[0].caption}`
                            // console.log(text)
                            americanArtContainer.append(img)
                            americanArtContainer.append(text)
            
                            },

                            error: function () { },
                        });
            
        }    
    },
    error: function () { },
});



{/* <select id="category-selector">
                    <option value="default">  </option>
                    <option value="American Art"> American Art </option>
                    <option value="Asian Art"> Asian Art </option>
                    <option value="African Art"> African Art</option>
                    <option value="Photography"> Photography </option>
                </select>

 */}

 

 var selection = document.getElementById("category-selector");
 function onChange() {
    
   const value = selection.value;
   selection.onchange = onChange;  
   console.log(value)
}

onChange();



// selection.onclick = function(onChange) {
//  americanArtContainer.style.visibilty = "hidden"
// }











































//   const asia = $.ajax({
//     url: "https://www.brooklynmuseum.org/api/v2/collection/2/highlight",
//     type: 'GET',
//     beforeSend: function (xhr) {
//       xhr.setRequestHeader('api_key', APIKEY);
//     },
//     data: {},
//     success: function (message) {
//         console.log(message.data)
//     },
//     error: function () { },
//   });

//   const africa = $.ajax({
//     url: "https://www.brooklynmuseum.org/api/v2/collection/21/highlight",
//     type: 'GET',
//     beforeSend: function (xhr) {
//       xhr.setRequestHeader('api_key', APIKEY);
//     },
//     data: {},
//     success: function (message) {
//         console.log(message.data)
//     },
//     error: function () { },
//   });

//   const photography = $.ajax({
//     url: "https://www.brooklynmuseum.org/api/v2/collection/3/highlight",
//     type: 'GET',
//     beforeSend: function (xhr) {
//       xhr.setRequestHeader('api_key', APIKEY);
//     },
//     data: {},
//     success: function (message) {
//         console.log(message.data)
//     },
//     error: function () { },
//   });  
