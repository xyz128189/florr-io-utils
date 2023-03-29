# Florr.io utils
This script is not intended to cheat or something, you may use it how you want, and I'm not responsible for any bans/problems you might receive using it.

It is obfuscated to avoid it getting fixed by the game's developer.

_I appreciate any help, feel free to open issues._

_Also, if you like the script, please `star` this repo._
# Installation
To use this script you need `Tampermonkey` extension ([link](https://tampermonkey.net/)). Analogues can work too.

Open this [link](https://github.com/xyz128189/florr-io-utils/raw/main/florr_io_utils.user.js). If you have `TamperMonkey` installed, you should see dialog window.

Click `Install` and you're done.

Go to florr.io and have fun!
# Documentation
To open utils menu press `Escape`.
### Hotkeys
#### Some hotkeys that will make your game a bit easier:

Numpad0 - Auto attack (press space to deactivate)

Numpad1 - Auto defend (press shift to deactivate)
### Current server
You can see your current server in the top right corner. You can toggle this in settings.
### Notifiers
In **Notifiers** section you can enable two notifiers - AFK check appear and boss spawn (ultra/super mobs spawn). Also, you can create your own notifiers.

Custom notifiers will notify you when text you specified appear on the screen.

You can play notify sound by pressing corresponding button, so you will know what notify sound sounds like.

It needs to be mentioned that notify sound is same for all notifiers (this may be changed in future).

Notifiers will work when you switch tabs.

**Note**: Sometimes notifiers might play sound too late or not play it at all. Keep in mind that.
### AntiAFK
With **AntiAFK** you can avoid getting kicked by annoying AFK checks and focus on other things while afking. It also avoids AFK warnings.

It will work when you switch tabs.

**Note**: Sometimes it might not work, though I tested it and was online for 5-6 hours. You can use it with AFK check notifier.
### Auto Spammer
With **AutoSpammer** you can spam messages with 5s interval.

To use **AutoSpammer** you need to enable it and set text for spam.

At the moment, it is not possible to change spam interval, and I can't say if it will be possible in the future.

**Note**: You can't move by keyboard while the spammer is typing. I suggest you to use mouse movement.

**ATTENTION**: If you switch tabs while spammer active, you'll find up it sends random characters. Don't switch tabs while your spammer active.
### AutoKey
With **AutoKey** you can write macroses.

There are 4 keywords: `pressKey`, `downKey`, `upKey` and `click`.

You must provide argument(s) to each keyword. Existing arguments for each keyword: `pressKey {key} {time}`, `downKey {key} {time}`, `upKey {key} {time}`, `click {x} {y} {time}`. The `time` argument defines the delay before operation will execute.

If you want to manipulate `Space` or `Shift` key, you just type `Space` or `Shift` as `key` argument.

Each line of code is a separate procedure which will run parallel to other procedures.

You can have as many operations in procedures as you want with `>` keyword: `pressKey 1 3000 > pressKey 1 15000`.

Some examples so you can understand **AutoKey** better:

Heal/magnet swap (you need to have heal equipped) - `pressKey 1 3000 > pressKey 1 15000`;

Auto attack - `downKey Space 1000`;

Auto defend - `downKey Shift 1000`;

Heal/magnet swap + auto attack (for AFK) - 
```
pressKey 1 3000 > pressKey 1 15000

downKey Space 1000
```
### Accounts Manager
In **Accounts Manager** section you can add, remove or login into accounts you added.

To add an account you need to press corresponding button, type account name and its token.

You can find your account token by pressing `F12` or `Ctrl + Shift + I` and going to `Application` (if not shown, click on dropdown button) tab, you'll need to find `oauth2_data` (you need to be logged in) and its contents.
### AutoChaser
You can chase players by enabling this function and setting target's nickname.

It won't work when you switch tabs.

**Note**: You need to use mouse movement, otherwise it won't work.
### Multibox
With multibox you can play on one account while your actions will be broadcasted to other connected accounts.

You need Multibox server to use it. You can download it [here](https://github.com/xyz128189/florr-io-multibox-server).

Once you set up your Multibox server and run it, you'll need to connect to it (it's assumed that you have already configured it).

Set your server connection URL and (optional) custom client ID. Press `Connect` button when you're done.

You can view connected clients and transfer host to them. You can't have more than one host in server.

To move your clients you need to enable `Send Keyboard Events`. Otherwise, your clients will only be able to attack and defend.

**Note**: Enabling `Send Keyboard Events` means every key you press will be broadcasted to all connected clients.
### Misc
Section that contains miscellaneous settings. Not need to be explained.
# Current bugs and caveats
Sometimes **AutoKey** might not work (as well, as other functions that used to emulate key press/mouse clicks). It may also depend on your network speed. Reload your page to fix this.


