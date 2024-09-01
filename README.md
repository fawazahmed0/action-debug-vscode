# action-debug-vscode
Remote Access your GitHub Actions via Browser Based Terminal.
Built using [ttyd](https://github.com/tsl0922/ttyd) and [Cloudflare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/)

## Features

- Debug your GitHub Actions by Remote Accessing your Github Action Runner
- Continue your Workflows afterwards


## Supported Operating Systems

- Linux
- macOS
- Windows


## Getting Started

```yaml
steps:
- uses: fawazahmed0/action-debug@main
```

The URL to access the terminal will be printed in Github Actions log.

The default credentials are:
| User:     | Password: |
|-----------|-------|
| admin | admin |

## Set Credentials

Set credentials in "user:password" format

```yaml
steps:
- uses: fawazahmed0/action-debug@main
  with:
      credentials: "user:password"
```


## Continue a workflow

If you want to continue a workflow, just create an empty file with the name `continue` in the project directory by running `touch continue`.

## Thanks to

God 🙏 (Remember! Be thankful to God)
