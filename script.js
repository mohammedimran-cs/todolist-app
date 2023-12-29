// // let inputData = $("#input-field");

// $("#btn1").click(()=> {
//    let  inputData =$("#input-field").val();
//     console.log(inputData);
//     if(inputData===""){
//         alert("your value is empty");
//     }
//     else {
//         let createList = $("<li></li>");
//          $("#list-con").append(createList);
//         $(createList).text(`${inputData}`);

//         let createButton = $("<button></button>");
//          $("#list-con").append(createButton);
//         $("#list-con li button").addClass("close-icon");

//         let createIcon = $("<img>");
//         $("#list-con li button").append(createIcon);
//         $("#list-con li button img").addClass("style-img");
//         $("#list-con li button img").attr("src","./close.png");

//         $(createIcon).append("body");
//     }
//     $("#input-field").val("");
// });

$("#btn1").click(() => {
    let inputData = $("#input-field").val();
    // console.log(inputData);


    if (inputData === "") {
        alert("Your value is empty");
    } else {

         // Clear the input field
        $("#input-field").val("");

        // Create a new list item
        let createList = $("<li></li>").text(`${inputData}`);

        // Create a new button with a class
        let createButton = $("<button></button>").addClass("close-icon");

        // Create a new image with a class
        let createIcon = $("<img>").addClass("style-img").attr("src", "./close.png");

        // Append the image to the button
        createButton.append(createIcon);

        // Append the button to the list item
        createList.append(createButton);

        // Append the list item to the list container
        $("#list-con").append(createList);

        storeLocalData();
    }
});


$("#list-con").on("click", ".close-icon", function() {
    // Find the closest <li> element and remove it
    $(this).parent("li").remove();
    storeLocalData();
});

$("#list-con").on("click", "li", function() {
    // Find the closest <li> element and remove it
    $(this).toggleClass("checked");
    storeLocalData();
});

function storeLocalData() {
   localStorage.setItem("data",$("#list-con").html());

   // Check if the data is successfully stored
   let storedData = localStorage.getItem("data");
   console.log(storedData);
}

getLocalData = ()=> {
    $("#list-con").html(localStorage.getItem("data"));
}

getLocalData();




// // Function to add a new item to the list
// function addListItem(inputData) {
//     // Create a new list item
//     let createList = $("<li></li>").text(`${inputData}`);

//     // Create a new button with a class
//     let createButton = $("<button></button>").addClass("close-icon");

//     // Create a new image with a class
//     let createIcon = $("<img>").addClass("style-img").attr("src", "./close.png");

//     // Append the image to the button
//     createButton.append(createIcon);

//     // Append the button to the list item
//     createList.append(createButton);

//     // Append the list item to the list container
//     $("#list-con").append(createList);
// }

// // Function to store data in localStorage
// function localData(data) {
//     // Retrieve existing data from localStorage
//     let existingData = localStorage.getItem("getData");
//     console.log(typeof existingData);
    
//     // Parse existing data as JSON or initialize an empty array
//     let dataList = existingData ? JSON.parse(existingData) : [];

//     // Add the new data to the array
//     dataList.push(data);

//     // Save the updated array back to localStorage
//     localStorage.setItem("getData", JSON.stringify(dataList));
// }

// // Function to retrieve data from localStorage and display it
// function displayLocalData() {
//     // Retrieve data from localStorage
//     let existingData = localStorage.getItem("getData");

//     // Parse existing data as JSON or initialize an empty array
//     let dataList = existingData ? JSON.parse(existingData) : [];

//     // Iterate over the array and add items to the list
//     dataList.forEach((item) => {
//         addListItem(item);
//     });
// }

// // Event handler for the button click
// $("#btn1").click(() => {
//     let inputData = $("#input-field").val();

//     if (inputData === "") {
//         alert("Your value is empty");
//     } else {
//         // Clear the input field
//         $("#input-field").val("");

//         // Store the input data in localStorage
//         localData(inputData);

//         // Add the new item to the list
//         addListItem(inputData);
//     }
// });

// // Event handler for removing a list item
// $("#list-con").on("click", ".close-icon", function () {
//     // Find the closest <li> element and remove it
//     let removedItemText = $(this).closest("li").text().trim();

//     console.log(`index of item ${removedItemText}`)
//     // Remove the corresponding data from localStorage
//     removeLocalData(removedItemText);

//     // Remove the list item from the DOM
//     $(this).closest("li").remove();
// });

// function removeLocalData(itemText) {
//     // Retrieve existing data from localStorage
//     let existingData = localStorage.getItem("getData");
//     console.log(existingData);

//     // Parse existing data as JSON or initialize an empty array
//     let dataList = existingData ? JSON.parse(existingData) : [];
//     console.log(dataList);

//     // Find the index of the specific occurrence of the item to be removed
//     let indexToRemove = dataList.findIndex(item => item === itemText);

//     // Remove the item only if it exists in the array
//     if (indexToRemove !== -1) {
//         console.log(indexToRemove);
//         dataList.splice(indexToRemove, 1);
//     }

//     // Save the updated array back to localStorage
//     localStorage.setItem("getData", JSON.stringify(dataList));
// }


// // Event handler for marking a list item as checked
// $("#list-con").on("click", "li", function () {
//     // Toggle the 'checked' class on the clicked <li> element
//     $(this).toggleClass("checked");
// });

// // Display existing data when the page loads
// $(document).ready(function () {
//     displayLocalData();
// });

