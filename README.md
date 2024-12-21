# Repro: `allowed_merge_methods` in GitHub Rulesets POST API

```shell
npm i
npm run tsc
```

```plaintext
index.ts:21:9 - error TS2353: Object literal may only specify known properties, and 'allowed_merge_methods' does not exist in type '{ dismiss_stale_reviews_on_push: boolean; require_code_owner_review: boolean; require_last_push_approval: boolean; required_approving_review_count: number; required_review_thread_resolution: boolean; }'.

21         allowed_merge_methods: ["squash"],
           ~~~~~~~~~~~~~~~~~~~~~
```
