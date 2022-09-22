---
title: Using local extensions
parent: For users
order: 2
---

It is possible to use extensions without using repositories. This can be useful when prototyping. 

## To install an extension locally:

### 1. Give Cloudstream storage permissions
    
if you're using Android 11 or later you need to make sure that you **Allow management of all files**, not just media in the settings.

### 2. Start and close the app

If you've done everything correctly, you should now see a `Cloudstream3` folder in your device's files. Inside it there should be a `plugins` folder.

### 3. Download or compile extensions

You can now download (most likely from the `builds` branch of the repository of your choosing) or compile an extension. You should look for files ending with `.cs3`

### 4. Put your newly acquired `.cs3` file in the `Cloudstream3/plugins` folder.

### 5. You should now see your extension working. 

You can make sure by going to `settings > extensions` and clicking the bottom progress bar to show a list of all extensions (including the locally installed ones)
