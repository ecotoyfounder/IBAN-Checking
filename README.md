# IBAN-Checking

This small app helps to check IBAN using some rules of IBAN standard (you can introduce that on the Wiki https://en.wikipedia.org/wiki/International_Bank_Account_Number)

**A bit about the rules**

• 2 symbols at the start of IBAN must contain the Country code 
• The third and fourth symbols must be a number 
• IBAN must contain just capital English letters and numbers 
• IBAN length can't be longer than 34 symbols 
• The shortest value I found was 16 symbols for Belgium 

**You can check not only a single IBAN but a list too. The list must contain a divider — ',' (comma) or '\n' (transfer to the new line).**

If everything is successful, the button will turn green, if not, it will turn red, and incorrect IBANs will be displayed on it.
After the checking, you can empty the field and button value (just press the button **Refresh**).

**How to run the app?**

1. You can go to **Code -> Environments** and press the button “View deployment” to view the app and try to check IBAN.
2. You can run the app from index.html file (Open in Default Browser) and try to check IBAN.
