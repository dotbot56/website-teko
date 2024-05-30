### Step 1: Install additional software components

Connect to your Linux server by setting up a remote desktop connection or by making an SSH connection with PuTTy.

```bash
apt update

#wget Installieren
apt install wget

#OpenJDK Java runtime environment installieren
apt install openjdk-17-jre-headless

#Überpüfen ob die Installation erfolgreich war
java - version
```

[![image.png](https://wiki.db-t.ch/uploads/images/gallery/2024-01/scaled-1680-/9EncltmoBodlMsvD-image.png)](https://wiki.db-t.ch/uploads/images/gallery/2024-01/9EncltmoBodlMsvD-image.png)

### Step 2: Enable Minecraft server port

<div id="bkmrk-after-you-have-insta">After you have installed the basic components for your Minecraft server on Linux, the next step is to enable TCP port 25565. By default, the server application uses this port to communicate with clients, so a corresponding firewall rule is essential. Use the following command to add the new policy:</div><div id="bkmrk--1"></div>```bash
ufw allow 25565
```

[![image.png](https://wiki.db-t.ch/uploads/images/gallery/2024-01/scaled-1680-/1GWR1TZequZMzrPM-image.png)](https://wiki.db-t.ch/uploads/images/gallery/2024-01/1GWR1TZequZMzrPM-image.png)

### Step 3: Install Minecraft server application (Java edition)

<div id="bkmrk-now-you-can-download">Now you can download and install the server software of the sandbox game. For the best compatibility, use the Java edition, and it is equally important that you use a recent version of this variant.</div><div id="bkmrk-to-do-this%2C-go-to-th">To do this, go to the [official download page of Minecraft: Java Edition server](https://onedrive.live.com/view.aspx?resid=7F3E1D8A73BA7797%2110897&id=documents&wd=target%28Services.one%7CB9A9CD41-D6F3-4865-93D2-C8BA3833550A%2FMinecraft%7C6444DA3C-B0BD-4B26-A305-DBDA234F7953%2F%29%20onenote:https://d.docs.live.net/7f3e1d8a73ba7797/Dokumente/Server-Handbuch/Services.one#Minecraft&section-id=%7BB9A9CD41-D6F3-4865-93D2-C8BA3833550A%7D&page-id=%7B6444DA3C-B0BD-4B26-A305-DBDA234F7953%7D&object-id=%7B2B3A0E36-0AE7-0379-018F-33B176E233F7%7D&51) and copy and paste the link displayed there.</div><div id="bkmrk--3"></div>```bash
#Erstelle für jeden Minecraft-Server einen Ordner
mkdir minecraft-server1

#Download des Minecraft-Server
wget https://launcher.mojang.com/v1/objects/c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar
```

### Step 4: Running the server application for the first time

<div id="bkmrk--4"></div>Starte des Minecraft-Servers mit folgende Eingabe aus:

```
java -Xms1G -Xmx2G -jar server.jar nogui
```

Minecraft: Java Edition Server (hier Version 1.20.4) wird anschließend ohne grafische Benutzeroberfläche ("nogui") geladen. Für die Ausführung wird 1 Gigabyte als "Start"-Speicher gewährt ("Xms1G") - der maximale Speicherverbrauch ist auf 2 Gigabyte begrenzt ("Xmx2G"). Natürlich können Sie diese Werte individuell anpassen.

  
Wenn Sie den Befehl zum ersten Mal ausführen, werden Sie am Ende des Ladevorgangs die folgenden beiden Fehlermeldungen erhalten:

[![image.png](https://wiki.db-t.ch/uploads/images/gallery/2024-01/scaled-1680-/5EbbmCVWqyyCyihg-image.png)](https://wiki.db-t.ch/uploads/images/gallery/2024-01/5EbbmCVWqyyCyihg-image.png)

Zum einen konnte also die Datei eula.txt nicht geladen werden, zum anderen fehlen dem Minecraft-Server Konfigurationsinformationen, die standardmäßig in der Datei server.properties definiert werden sollen.  
Die Zustimmungsdatei zum Endbenutzer-Lizenzvertrag (EULA) wird anschließend direkt im aktuellen Verzeichnis erzeugt. Sie können die Datei wie folgt öffnen:

```
nano eula.txt

#Eula aktzeptieren
"eula=true"
```

[![image.png](https://wiki.db-t.ch/uploads/images/gallery/2024-01/scaled-1680-/uatEvS2nxRCzUMdr-image.png)](https://wiki.db-t.ch/uploads/images/gallery/2024-01/uatEvS2nxRCzUMdr-image.png)

### Step 5: Configure server

<div id="bkmrk-server-konfigurieren">Server konfigurieren  
Nachdem Sie der Lizenzvereinbarung zugestimmt haben, können Sie sich der Konfigurationsdatei server.properties zuwenden. Diese wurde beim ersten Start der Serveranwendung ebenfalls im aktuellen Verzeichnis erstellt. Öffnen Sie die Datei mit dem Texteditor nano:</div>```
nano server.properties
```

Sie finden eine erste, einfache Standardkonfiguration, in der unter anderem der Schwierigkeitsgrad und der Serverport ("query.port") festgelegt sind. Passen Sie die Konfiguration individuell an und speichern Sie die Datei abschließend. Eine detaillierte Liste aller möglichen Einstellungen finden Sie im offiziellen [Minecraft-Fandom-Wiki](https://onedrive.live.com/view.aspx?resid=7F3E1D8A73BA7797%2110897&id=documents&wd=target%28Services.one%7CB9A9CD41-D6F3-4865-93D2-C8BA3833550A%2FMinecraft%7C6444DA3C-B0BD-4B26-A305-DBDA234F7953%2F%29%20onenote:https://d.docs.live.net/7f3e1d8a73ba7797/Dokumente/Server-Handbuch/Services.one#Minecraft&section-id=%7BB9A9CD41-D6F3-4865-93D2-C8BA3833550A%7D&page-id=%7B6444DA3C-B0BD-4B26-A305-DBDA234F7953%7D&object-id=%7B2B3A0E36-0AE7-0379-018F-33B176E233F7%7D&97).

[![image.png](https://wiki.db-t.ch/uploads/images/gallery/2024-01/scaled-1680-/J2BBIErEYRXQQijA-image.png)](https://wiki.db-t.ch/uploads/images/gallery/2024-01/J2BBIErEYRXQQijA-image.png)

### Step 6: Start Minecraft server

<div id="bkmrk--8"></div><div id="bkmrk-nachdem-sie-den-eula">Nachdem Sie den EULA-Bedingungen zugestimmt und Ihre individuelle Serverkonfiguration gespeichert haben, können Sie nun den bereits in Schritt 4 verwendeten Befehl zum Starten des Minecraft-Servers ein weiteres Mal in das Linux-Terminal eingeben:  
</div>```
java -Xms1G -Xmx2G -jar server.jar nogui
```

<div id="bkmrk-nach-erfolgreichem-s">Nach erfolgreichem Startvorgang - der einige Zeit dauert - zeigt das Terminal die Meldung an:  

</div>[![image.png](https://wiki.db-t.ch/uploads/images/gallery/2024-01/scaled-1680-/b5zci3zKuqhwRPZV-image.png)](https://wiki.db-t.ch/uploads/images/gallery/2024-01/b5zci3zKuqhwRPZV-image.png)

<p class="callout info">Geben Sie nun "help" ein und Sie erhalten eine Liste der möglichen Serverbefehle.</p>

### Step 7: Connect to Minecraft server

<div id="bkmrk-ihr-server-l%C3%A4uft-und">Ihr Server läuft und Sie können sich nun jederzeit mit der generierten Spielwelt verbinden. Gehen Sie dazu wie folgt vor:  
 1. Starten Sie dazu den Minecraft-Client (Java Edition).  
 2. Wählen Sie "Multiplayer".  
 3. Klicken Sie auf Direktverbindung.  
 4. Gib die IP-Adresse deines Minecraft-Servers ein.  
Wenn Sie fertig sind, klicken Sie auf "Server beitreten".</div>[![image.png](https://wiki.db-t.ch/uploads/images/gallery/2024-01/scaled-1680-/81eRhF6cTdubNXWR-image.png)](https://wiki.db-t.ch/uploads/images/gallery/2024-01/81eRhF6cTdubNXWR-image.png)

<div id="bkmrk--11"></div><div id="bkmrk--12">  
</div><div id="bkmrk--13">  
</div><div id="bkmrk--14">  
</div><div id="bkmrk--15">  
</div><div id="bkmrk--16"></div>
