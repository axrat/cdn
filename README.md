# Content Delivery Network
[![Build Status](https://travis-ci.org/onoie/cdn.svg?branch=master)](https://travis-ci.org/onoie/cdn)
## DeployKeySetup
* `ssh-keygen -t rsa -b 4096 -C "<your_email>" -f github_deploy_key -N ''`
* upload github_deploy_key.pub to github (allow write access)
* `travis encrypt-file github_deploy_key`
* `rm github_deploy_key.pub github_deploy_key`
* `mkdir -p .travis`
* `mv github_deploy_key.enc ./.travis/`
* replace  
```
after_success:
  - |

       $(npm bin)/set-up-ssh --key "$encrypted_XXXXXXXXXXXX_key" \
                             --iv "$encrypted_XXXXXXXXXXXX_iv" \
                             --path-encrypted-key ".travis/github_deploy_key.enc"
```

### Reference
[https://github.com/alrra/travis-scripts/blob/master/doc/github-deploy-keys.md]()