# Synthetiq Flash Module

A local Synthetiq Player video module for **The Flash (2014)**. Search intentionally returns only The Flash; this is a single-title module, not a general catalogue search provider.

## Package

- Module ID: `the-flash-v1`
- Family ID: `the-flash-v1`
- Identity: `SP-VID-099-FLASH` (preserved)
- Contract: V3
- Version: `1.0.2`
- Entry point: `index.js`
- Episodes: 184 entries across seasons 1–9

## Import

Download `the-flash-v1.0.2.zip` from this repository and import that ZIP into Synthetiq Player. The ZIP contains `module.json` and `index.js` at its root.

## Notes

The module includes a direct HLS URL resolver for its configured source host. Actual playback depends on the source being reachable and accepted by the Synthetiq runtime. This package has been statically checked, but has **not** been certified through the real Synthetiq/S2 runtime or simulator.
