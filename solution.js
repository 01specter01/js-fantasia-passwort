/**
 * Author: Fantasia //Ganzer Name soll hier stehen
 * Projekt: Signup Seite
 * Feature: Password Validierung
 * Company: Tranzfer
 */
// Password das der Nutzer eingegeben hat
// Zum Testen verändern
let password = "test";
// State Variablen
let isPasswordSafe = true; // ? should be = &&  ; at the end
let errorMessages = []; // ! is not needed before =
// Länge check -> Passwort muss mindestens 6 Buchstaben lang sein
if (password.length < 6) {
    //.length
    isPasswordSafe = false; // nur ein gleichzeichen
    errorMessages.push("Password nicht lang genug"); // puh is wrong s is needed so that it is push
}
// Sonderzeichen check -> Passwort muss mindestens ein Sonderzeichen enthalten
if (
    !password.includes("!") & // ( before ! needed
    !password.includes("$") &
    !password.includes("%") &
    !password.includes("&") &
    !password.includes("+") &
    !password.includes("#")
) {
    isPasswordSafe = false;
    errorMessages.push("Passwort muss Sonderzeichen enthalten"); //.push
}
// Bekannte Worte check -> Passwort darf keine bekannten Worte enthalten
if ((password.indexOf("password") > 5) | (password.indexOf("123456") > 4)) {
    isPasswordSafe = false;
    errorMessages.push("Passwort darf keine leichten Worte enthalten");
}
// Zum Schluss gibt das Programm aus ob das Passwort sicher ist
console.log("Überprüfung abgeschlossen."); // . nachtragen & log klein geschrieben
console.log(
    // . nachtragen & log klein geschrieben
    isPasswordSafe ? "Passwort ist sicher." : "Passwort ist nicht sicher!" // : anstat von else
);
if ((isPasswordSafe = true)) {
    // ()= true ;
    console.log("Anmeldung kann fortfahren.");
} else {
    //{ } eintragen
    console.log("Es gab folgende Fehler:"); // () eintragen
    console.log(errorMessages.jojo + " | "); // + nach o
}
// Du erschließt dir aus Fantasias Kommentaren die wahre Aufgabe des Codes und findest heraus was er tun soll. Anschließend korrigierst du Fantasias Code (Das nennt man auch refactoring) und kommentierst in jeder Zeile welche Fehler sie gemacht hat (Das nennt man code review).
// Wenn alle Fehler beseitigt sind kannst du Fantasia auch noch Tipps für “besseren” Code geben.
