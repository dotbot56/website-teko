---
title: "DotBot - Pages"
layout: mylayout.njk
---

## Schritt 1: Installieren zusätzlicher Softwarekomponenten

Verbnden Sie sich mit Ihrem Linux-Server, indem Sie eine Remote-Desktop-Verbindung herstellen oder eine SSH-Verbindung mit PuTTy herstellen.

```bash
apt update

#wget Installieren
apt install wget

#OpenJDK Java runtime environment installieren
apt install openjdk-17-jre-headless

#Überpüfen ob die Installation erfolgreich war
java - version
```

![Schritt 1](./images/step_1.webp "Schritt 1")

## Schritt 2: Minecraft Server Port aktivieren

Nachdem Sie die grundlegenden Komponenten für Ihren Minecraft-Server auf Linux installiert haben, besteht der nächste Schritt darin, den TCP-Port 25565 zu aktivieren. Standardmäßig verwendet die Serveranwendung diesen Port zur Kommunikation mit Clients, daher ist eine entsprechende Firewall-Regel unerlässlich. Verwenden Sie den folgenden Befehl, um die neue Regel hinzuzufügen:

```bash
ufw allow 25565
```

![Schritt 2](./images/step_2.webp "Schritt 2")

## Schritt 3: Installieren der Minecraft-Serveranwendung (Java-Edition)

Jetzt können Sie die Server-Software des Sandbox-Spiels herunterladen und installieren. Für die beste Kompatibilität verwenden Sie die Java-Edition, und es ist ebenso wichtig, dass Sie eine aktuelle Version dieser Variante verwenden.

```bash
#Erstelle für jeden Minecraft-Server einen Ordner
mkdir minecraft-server1

#Download des Minecraft-Server
wget https://launcher.mojang.com/v1/objects/c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar
```

## Schritt 4: Ausführen der Serveranwendung zum ersten Mal

Starten Sie den Minecraft-Server mit folgender Eingabe:

```bash
java -Xms1G -Xmx2G -jar server.jar nogui
```

Minecraft: Java Edition Server (hier Version 1.20.4) wird anschließend ohne grafische Benutzeroberfläche ("nogui") geladen. Für die Ausführung wird 1 Gigabyte als "Start"-Speicher gewährt ("Xms1G") - der maximale Speicherverbrauch ist auf 2 Gigabyte begrenzt ("Xmx2G"). Natürlich können Sie diese Werte individuell anpassen.

Wenn Sie den Befehl zum ersten Mal ausführen, werden Sie am Ende des Ladevorgangs die folgenden beiden Fehlermeldungen erhalten:

![Schritt 4a](./images/step_4a.webp "Schritt 4a")

Zum einen konnte also die Datei eula.txt nicht geladen werden, zum anderen fehlen dem Minecraft-Server Konfigurationsinformationen, die standardmäßig in der Datei server.properties definiert werden sollen.  
Die Zustimmungsdatei zum Endbenutzer-Lizenzvertrag (EULA) wird anschließend direkt im aktuellen Verzeichnis erzeugt. Sie können die Datei wie folgt öffnen:


```bash
nano eula.txt

#Eula aktzeptieren
eula=true
```

![Schritt 4b](./images/step_4b.webp "Schritt 4b")
## Schritt 5: Konfigurieren des Servers

Nachdem Sie der Lizenzvereinbarung zugestimmt haben, können Sie sich der Konfigurationsdatei `server.properties` zuwenden. Diese wurde beim ersten Start der Serveranwendung ebenfalls im aktuellen Verzeichnis erstellt. Öffnen Sie die Datei mit dem Texteditor nano:

```bash
nano server.properties
```

![Schritt 5](./images/step_5.webp "Schritt 5")

## Schritt 6: Starten des Minecraft-Servers

Nachdem Sie den EULA-Bedingungen zugestimmt und Ihre individuelle Serverkonfiguration gespeichert haben, können Sie nun den bereits in Schritt 4 verwendeten Befehl zum Starten des Minecraft-Servers ein weiteres Mal in das Linux-Terminal eingeben:

```bash
java -Xms1G -Xmx2G -jar server.jar nogui
```

![Schritt 6](./images/step_6.webp "Schritt 6")

## Schritt 7: Verbinden zum Minecraft-Server

Ihr Server läuft und Sie können sich nun jederzeit mit der generierten Spielwelt verbinden. Gehen Sie dazu wie folgt vor:
1. Starten Sie den Minecraft-Client (Java Edition).
2. Wählen Sie "Multiplayer".
3. Klicken Sie auf "Direktverbindung".
4. Geben Sie die IP-Adresse Ihres Minecraft-Servers ein.

Wenn Sie fertig sind, klicken Sie auf "Server beitreten".

![Schritt 7](./images/step_7.webp "Schritt 7")

Ich hoffe, das hilft Ihnen weiter! Passen Sie die Texte und Bildbeschreibungen nach Bedarf an.
