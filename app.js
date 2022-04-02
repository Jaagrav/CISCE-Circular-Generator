var placeHolderText = `<b>To: All Heads of the Schools presenting candidates for the ISC Year 2022 Semester 2 Examination</b>

Dear Principal,

<b>Subject:  Revision of the timetable for the ISC Year 2022 Semester 2 Examination until further notice.</b>

This has reference to the Revised Timetable for the ISC Year 2022 Semester 2 Examination released on <b>16th March 2022</b>. Due to unavoidable circumstances, the CISCE has decided to postpone the ISC Year 2022 Semester 2 Examination until further notice. 

In the light of the above-mentioned fact, the CISCE requests you to continue preparing for the forthcoming Joint Entrance Examination organised by the National Testing Agency and the other entrance examinations as they are essential for you to get into a college or something. However the ISC Year 2022 Semester 2 Examination is utterly important as well and must not be ignored otherwise we will find you and execute you.

You are further requested to ignore the above-mentioned message and advices you to live a happy life since you are as important as an african man dying of dehydration.

The CISCE wishes all its candidates best of luck for their forthcoming Examination.`;

document.querySelector(".letter-text").innerHTML = placeHolderText;
document.querySelector(".circular-letter").innerHTML = placeHolderText;
document.querySelector(".letter-text").addEventListener("keyup", function (e) {
  document.querySelector(".circular-letter").innerHTML = e.target.value;
});

document.querySelectorAll(".download-btn").forEach((btn) => {
  const fileType = btn.getAttribute("file-type");

  btn.addEventListener("click", function (e) {
    console.log(fileType);
    html2canvas(document.querySelector(".circular-cover-downloadable"), {
      scale: "4",
    }).then(function (canvas) {
      console.log(canvas);
      switch (fileType) {
        case "pdf":
          const pdfData = canvas.toDataURL("image/jpg");
          const pdf = new jsPDF({
            orientation: "p",
            unit: "pt",
            format: [canvas.width, canvas.height],
          });
          pdf.addImage(pdfData, "JPEG", 0, 0, canvas.width, canvas.height);
          pdf.save("ISC Circular.pdf");
          break;
        case "png":
          var pngData = canvas.toDataURL("image/png", 1.0);
          download(pngData, "ISC Circular.png", "image/png");
          break;
        case "jpg":
          var jpgData = canvas.toDataURL("image/jpg", 1.0);
          download(jpgData, "ISC Circular.jpg", "image/jpg");
          break;
      }
    });
  });
});
