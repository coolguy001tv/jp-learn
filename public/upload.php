<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["uploadedFile"]) && $_FILES["uploadedFile"]["error"] == 0) {
        $filename = $_FILES["uploadedFile"]["name"];
        $filetype = $_FILES["uploadedFile"]["type"];
        $filesize = $_FILES["uploadedFile"]["size"];

        // Verify file extension
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        if ($ext !== "txt") {
            die("Error: Please upload a .txt file.");
        }

        // Verify file size - 500KB maximum
        $maxsize = 500 * 1024;
        if ($filesize > $maxsize) {
            die("Error: File size is larger than the allowed limit of 500KB.");
        }

        // Verify MIME type of the file
        if ($filetype == "text/plain") {
            // Save file in the current directory with the name "word-list.txt"
            if (!move_uploaded_file($_FILES["uploadedFile"]["tmp_name"], "word-list.txt")) {
                echo "Error: There was a problem uploading your file. Please try again.";
            } else {
                echo "Your file was uploaded and overwritten successfully.";
            }
        } else {
            echo "Error: There was a problem with the file type. Only .txt files are allowed.";
        }
    } else {
        echo "Error: " . $_FILES["uploadedFile"]["error"];
    }
}
?>
