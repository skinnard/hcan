//******************************************************************
//
// Download assessment PDF
//
//******************************************************************

var imgData = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkyRTdFQkVGREM0RjExRTg4RUVCRjFFNURDNDZDMjI2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkyRTdFQkYwREM0RjExRTg4RUVCRjFFNURDNDZDMjI2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTJFN0VCRUREQzRGMTFFODhFRUJGMUU1REM0NkMyMjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTJFN0VCRUVEQzRGMTFFODhFRUJGMUU1REM0NkMyMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAGBAQEBQQGBQUGCQYF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";

// Talk to Doctor PDF
function downloadPDF(quality = 1) {

    var filename = 'talk_to_your_doctor.pdf';
    var pdf = new jsPDF('l', 'mm', 'a4');

    if ($(window).width() > 600) {
        html2canvas(document.querySelector('#PDFcontent'), {scale: quality}).then(canvas => {    
            pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
            var height = pdf.internal.pageSize.height - 60;
            var width = canvas.width / canvas.height * height;
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', (pdf.internal.pageSize.width - width) / 2, 40, width, height);
            pdf.save(filename);
        });
    } else {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
        pdf.text('Start the conversation by showing this to your physician.', 20, 50);
        startOfText = 70;
        $('#PDFcontent .table-content tr').each(function() {
            question = $(this).find('.title-cell').text();
            splitQuestion = pdf.splitTextToSize(question, 230);
            pdf.text(splitQuestion, 20, startOfText);
            if ($(this).find( "input:first-of-type:checked" ).val() == 'on') {
                pdf.text('Yes', pdf.internal.pageSize.width - 35, startOfText);
            } else {
                pdf.text('No', pdf.internal.pageSize.width - 33.5, startOfText);
            }
            startOfText += 15;
        })

        pdf.save(filename);
    }
}

// Risk Assessment PDF
function downloadPDFRisk(quality = 1) {
    var filenameRisk = 'Osteoperosis_risk_assessment.pdf';
    var pdf = new jsPDF('l', 'mm', 'a4');
    
    if ($(window).width() > 600) {
        html2canvas(document.querySelector('#PDFcontentRisk'), {scale: quality}).then(canvas => {    
            pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
            var height = pdf.internal.pageSize.height - 60;
            var width = canvas.width / canvas.height * height;
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', (pdf.internal.pageSize.width - width) / 2, 40, width, height);
            pdf.save(filenameRisk);
        });
    } else {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
        pdf.text('Start the conversation by showing this to your physician.', 20, 50);
        startOfText = 70;
        $('#PDFcontentRisk .table-content tr').each(function() {
            question = $(this).find('.title-cell').text();
            splitQuestion = pdf.splitTextToSize(question, 230);
            pdf.text(splitQuestion, 20, startOfText);
            if ($(this).find( "input:first-of-type:checked" ).val() == 'on') {
                pdf.text('Yes', pdf.internal.pageSize.width - 35, startOfText);
            } else {
                pdf.text('No', pdf.internal.pageSize.width - 33.5, startOfText);
            }
            startOfText += 15;
        })
        pdf.save(filenameRisk);
    }
}

// Talk to Doctor PDF FRENCH
function downloadPDFFR(quality = 1) {

    var filenameFR = 'parlez-a-votre-medecin.pdf';
    var pdf = new jsPDF('l', 'mm', 'a4');

    if ($(window).width() > 600) {
        html2canvas(document.querySelector('#PDFcontentFR'), {scale: quality}).then(canvas => {    
            pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
            var height = pdf.internal.pageSize.height - 60;
            var width = canvas.width / canvas.height * height;
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', (pdf.internal.pageSize.width - width) / 2, 40, width, height);
            pdf.save(filename);
        });
    } else {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
        pdf.text('Commencez la conversation en montrant cela à votre médecin.', 20, 50);
        startOfText = 70;
        $('#PDFcontentFR .table-content tr').each(function() {
            question = $(this).find('.title-cell').text();
            splitQuestion = pdf.splitTextToSize(question, 230);
            pdf.text(splitQuestion, 20, startOfText);
            if ($(this).find( "input:first-of-type:checked" ).val() == 'on') {
                pdf.text('Oui', pdf.internal.pageSize.width - 35, startOfText);
            } else {
                pdf.text('Non', pdf.internal.pageSize.width - 33.5, startOfText);
            }
            startOfText += 15;
        })

        pdf.save(filenameFR);
    }
}


// Risk Assessment FRENCH PDF
function downloadPDFRiskFR(quality = 1) {
    var filenameRiskFR = 'evaluation-du-risque-d-osteoporose.pdf';
    var pdf = new jsPDF('l', 'mm', 'a4');
    
    if ($(window).width() > 600) {
        html2canvas(document.querySelector('#FRPDFcontentRisk'), {scale: quality}).then(canvas => {    
            pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
            var height = pdf.internal.pageSize.height - 60;
            var width = canvas.width / canvas.height * height;
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', (pdf.internal.pageSize.width - width) / 2, 40, width, height);
            pdf.save(filenameRisk);
        });
    } else {
        pdf.addImage(imgData, 'JPEG', 0, 0, pdf.internal.pageSize.width, 20);
        pdf.text('Commencez la conversation en montrant cela à votre médecin', 20, 50);
        startOfText = 70;
        $('#FRPDFcontentRisk .table-content tr').each(function() {
            question = $(this).find('.title-cell').text();
            splitQuestion = pdf.splitTextToSize(question, 230);
            pdf.text(splitQuestion, 20, startOfText);
            if ($(this).find( "input:first-of-type:checked" ).val() == 'on') {
                pdf.text('Oui', pdf.internal.pageSize.width - 35, startOfText);
            } else {
                pdf.text('Non', pdf.internal.pageSize.width - 33.5, startOfText);
            }
            startOfText += 15;
        })
        pdf.save(filenameRiskFR);
    }
}