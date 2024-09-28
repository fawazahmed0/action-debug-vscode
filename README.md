# action-debug-vscode
Remote Access your GitHub Actions via Browser based VS Code.
Built using [vscode server](https://code.visualstudio.com/docs/remote/vscode-server) and [Cloudflare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/)

## Features

- Debug your GitHub Actions by Remote Accessing your Github Action Runner
- Continue your Workflows afterwards


https://github.com/user-attachments/assets/5021351d-2a9a-46b5-9fec-1d36a1eed84e



## Supported Operating Systems

- Linux
- macOS
- Windows


## Getting Started

```yaml
steps:
- uses: fawazahmed0/action-debug-vscode@main
```

The URL to access the vs code will be printed in Github Actions log.

## Set Token
Default token is `root`. You can change it to something else.

```yaml
steps:
- uses: fawazahmed0/action-debug-vscode@main
  with:
      token: "root"
```

Also you need to set your token in url, eg: `tkn=root`

## Continue a workflow

If you want to continue a workflow, just create an empty file with the name `continue` in the project directory.

## Thanks to

God 🙏 (Remember! Be thankful to God)
