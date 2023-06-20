## Static File Serving

```
app.use(express.static("folderName"))
```

url is xyz.com served from the public folder

|file|url|
|----|---| 
|public/index.html| xyz.com/ |
|public/cheese.html| xyz.com/cheese.html |
|public/style.css| xyz.com/style.css |
|public/css/style.css | xyz.com/css/style.css

### Urlecoded

```
?name=dragonfruit&color=pink&readyToEat=on
```

### JSON

```json
{"name": "dragonfruit",
"color": "pink",
"readyToEat": "on"}
```

### XML

```xml
<fruit>
<name>DragonFruit</name>
<color>pink</color>
<readyToEat>on</readyToEat>
</fruit>
```