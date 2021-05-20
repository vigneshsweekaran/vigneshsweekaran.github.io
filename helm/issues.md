# Issues faced generally
* Error: failed pre-install: timed out waiting for the condition
  * Solution: By default helm istall will timeout after 5 minutes if it is not completed
  * Info: default duration time to wait for any individual Kubernetes operation (like Jobs for hooks) (default 5m0s)
   
* Error: YAML parse error on cnf-pre-provisioning/templates/cnf-preprovisioning-preinstall-hook.yaml: error converting YAML to JSON: yaml: line 9: did not find expected key
  ##### Solution: 
  * Check the YAML syntax
  * Check whether the space is there between the first two opening curly braces eg. **WRONG** { { .Values.data } } **CORRECT** {{ .Values.data }}
