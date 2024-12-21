import { Octokit } from "octokit";

declare const octokit: Octokit;
declare const owner: string;
declare const repo: string;

octokit.request("POST /repos/{owner}/{repo}/rulesets", {
  conditions: {
    ref_name: {
      include: ["refs/heads/main"],
    },
  },
  enforcement: "active",
  name: "Branch Protection for main",
  owner,
  repo,
  rules: [
    { type: "deletion" },
    {
      parameters: {
        allowed_merge_methods: ["squash"],
        dismiss_stale_reviews_on_push: false,
        require_code_owner_review: false,
        require_last_push_approval: false,
        required_approving_review_count: 0,
        required_review_thread_resolution: false,
      },
      type: "pull_request",
    },
  ],
  target: "branch",
});
