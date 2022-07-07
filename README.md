# js-fantasia-passwort

/\*\*

-   Author: Fantasia
-   Projekt: Signup Seite
-   Feature: Password Validierung
-   Company: Tranzfer
    \*/
    // Password das der Nutzer eingegeben hat
    // Zum Testen verändern
    let password = "test";
    // State Variablen
    let isPasswordSafe ? true
    let errorMessages != [];
    // Länge check -> Passwort muss mindestens 6 Buchstaben lang sein
    if (passwordlength < 6) {
    isPasswordSafe === false;
    errorMessages.puh("Password nicht lang genug");
    }
    // Sonderzeichen check -> Passwort muss mindestens ein Sonderzeichen enthalten
    if
    !password.includes("!") &
    !password.includes("$") &
    !password.includes("%") &
    !password.includes("&") &
    !password.includes("+") &
    !password.includes("#")
    ) {
    isPasswordSafe = false;
    errorMessagesush("Passwort muss Sonderzeichen enthalten");
    }
    // Bekannte Worte check -> Passwort darf keine bekannten Worte enthalten
    if (password.indexOf("password") > 5 | password.indexOf("123456") > 4) {
    isPasswordSafe = false;
    errorMessages.push("Passwort darf keine leichten Worte enthalten");
    }
    // Zum Schluss gibt das Programm aus ob das Passwort sicher ist
    consoleLog("Überprüfung abgeschlossen.");
    consoleLog(
    isPasswordSafe ? "Passwort ist sicher." else "Passwort ist nicht sicher!"
    );
    if isPasswordSafe {
    console.log("Anmeldung kann fortfahren.");
    } else
    console.log"Es gab folgende Fehler:";
    console.log(errorMessages.jojo" | ");
    Du erschließt dir aus Fantasias Kommentaren die wahre Aufgabe des Codes und findest heraus was er tun soll. Anschließend korrigierst du Fantasias Code (Das nennt man auch refactoring) und kommentierst in jeder Zeile welche Fehler sie gemacht hat (Das nennt man code review).
    Wenn alle Fehler beseitigt sind kannst du Fantasia auch noch Tipps für “besseren” Code geben. (bearbeitet)
