# Reproduction and validation

Checked 2026-10-27. Code and verification are AI-assisted.

Local result: **2 tests passed**.

Setup: Node.js 22+ for tests; no runtime dependencies for the web pages

Run:

```text
npm test
```

All listed demo entrypoints completed. Source fingerprints use UTF-8 source bytes with CRLF normalized to LF; pinned external data retain their own raw-byte hashes.

[Machine-readable evidence](validation-latest.json). Historical validation files describe earlier snapshots; old commit IDs may have changed after privacy-related history rewriting.

Tests do not establish production readiness, actual business gains or independent personal mastery.

Both pages passed browser create → reload persistence → JSON export smoke checks. Browser notifications and background scheduling remain subject to browser/OS permissions and lifecycle.
