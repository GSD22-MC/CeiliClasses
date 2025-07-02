# UXTest Command

Runs comprehensive mobile app UX testing framework for CeiliClasses

## Usage
```
/uxtest [phase] [--checklist] [--score]
```

## Parameters
- `phase` (optional): Run specific phase (1-13) or "all" for complete test
- `--checklist`: Show interactive checklist for manual verification
- `--score`: Calculate and display current score

## Examples
```
/uxtest                    # Run complete UX test framework
/uxtest 1                  # Run Phase 1: Foundation & Strategy
/uxtest --checklist        # Show interactive checklist
/uxtest --score            # Display current test scores
```

## What it does
1. **Analyzes current CeiliClasses app** against 13-phase UX framework
2. **Evaluates 265 total points** across:
   - Foundation & Strategy (25 pts)
   - Design System & Platform Compliance (30 pts)
   - Mobile UX Rules (25 pts)
   - 2025 Trends Implementation (10 pts)
   - Performance & Feedback (15 pts)
   - Information Architecture & Aesthetics (20 pts)
   - Screen States Implementation (25 pts)
   - Usability Testing Protocol (25 pts)
   - UX Best Practices & Heuristics (25 pts)
   - Component Linting & Validation (20 pts)
   - Deliverables Quality Assessment (20 pts)
   - Standards Evaluation (15 pts)
   - Change Commit Authorization (10 pts)

3. **Generates comprehensive report** with:
   - Phase-by-phase scoring
   - Pass/fail status for each criterion
   - Specific recommendations for improvements
   - Next steps for compliance

4. **Target Goals**:
   - Primary action completion <60s
   - Onboarding <60s
   - Task success rate ≥95%
   - 30-day retention ≥40%
   - Store rating ≥4.5

## Success Criteria
- **Minimum Pass**: 228/265 points (86%)
- **No phase below 70%**
- **Critical areas**: Platform compliance, performance, component linting must pass
- **Final certification** requires independent validation