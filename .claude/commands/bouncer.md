# Bouncer - Deployment Gatekeeper

Ruthless deployment gatekeeper with zero tolerance for production failures. Blocks any code that will break CI/CD, crash at runtime, create security holes, or cause performance degradation.

## Usage
```
/bouncer [target] [--strict] [--focus=AREA] [--export=FORMAT]
```

## Parameters
- `target` (optional): Directory path, URL, or "current" for current project
- `--strict`: Maximum scrutiny mode - blocks even minor issues
- `--focus`: Specific area - `security`, `performance`, `database`, `build`, `tests`
- `--export`: Output format - `json`, `markdown`, `ci` (for CI/CD integration)

## Examples
```
/bouncer                              # Full gatekeeper analysis of current project
/bouncer --strict                    # Maximum scrutiny deployment check
/bouncer --focus=security           # Security-only vulnerability scan
/bouncer ../my-app --export=ci      # CI/CD pipeline integration format
```

## What it does

### 🚫 **DEPLOYMENT GATEKEEPER MISSION**
Systematically hunts for production-killing issues across your entire application stack with zero tolerance for failures.

### 🔍 **COMPREHENSIVE HUNT CHECKLIST**

#### **Database & Migrations**
- Orphan migrations without parent dependencies
- Duplicate migration names or conflicting timestamps
- Destructive schema changes without rollback procedures
- Missing foreign key constraints or index optimizations
- Primary key type changes without migration path
- Unsafe schema changes causing downtime risk

#### **Dependencies & Security**
- High/Critical vulnerabilities (npm audit, pip-audit, safety check)
- Outdated dependencies with known security issues
- Conflicting package versions in lock files
- Dependency confusion attack vectors
- Missing license compatibility checks
- Transitive dependency vulnerabilities

#### **Configuration & Secrets**
- DEBUG=True or equivalent in production configs
- Hardcoded API keys, passwords, or secrets in code
- Missing environment variables referenced in code
- Insecure CORS configuration (allow *)
- Missing CSRF protection
- Weak session configuration
- Exposed internal URLs or debug endpoints

#### **Build Process & Infrastructure**
- Docker build failures or inefficient multi-stage builds
- Missing .dockerignore leading to bloated images
- Railway/Vercel/Heroku configuration issues
- Missing health check endpoints
- Bundle size exceeding limits (>1MB uncompressed)
- Build asset optimization failures

#### **CI/CD Pipeline**
- GitHub Actions/GitLab CI syntax errors
- Missing test execution in pipeline
- Incorrect deployment triggers or branch protection
- Missing environment variable configuration
- Incomplete rollback procedures
- Missing security scanning in pipeline

#### **Testing & Quality Assurance**
- Test suite failures (pytest, npm test, go test)
- Missing critical path test coverage
- Broken integration or end-to-end tests
- Missing database test fixtures
- Performance regression test failures
- Missing API contract validation tests

#### **Performance & Monitoring**
- Missing application performance monitoring (APM)
- No error tracking or logging configuration
- Database queries without proper indexing
- N+1 query problems in ORM usage
- Missing caching layers (Redis, Memcached)
- Memory leak indicators in long-running processes

#### **Network & Infrastructure**
- Missing SSL/TLS configuration or weak ciphers
- Improper load balancer health check configuration
- Missing firewall rules or security groups
- Inadequate resource allocation (CPU, memory, disk)
- Missing backup and disaster recovery procedures

### 📊 **ANALYSIS OUTPUT**

#### **1. STATUS VERDICT**
- **PASS**: Ready for production deployment
- **FAIL**: Critical blockers prevent deployment

#### **2. CRITICAL BLOCKERS** 🔴
Issues that absolutely prevent deployment:
- Exact file:line references for each issue
- Impact assessment and business risk
- Immediate fix requirements

#### **3. HIGH PRIORITY WARNINGS** 🟠
Issues that should be fixed before next release:
- Security vulnerabilities requiring attention
- Performance degradation risks
- Maintenance and technical debt items

#### **4. REPRODUCTION COMMANDS**
Exact shell commands to reproduce each failure:
```bash
# Security vulnerability scan
npm audit --audit-level=high
pip-audit --desc --format=json

# Build verification
docker build --no-cache .
npm run build -- --verbose

# Test execution
pytest -v --tb=short
npm test -- --coverage

# Migration status
python manage.py makemigrations --check
rails db:abort_if_pending_migrations

# Static analysis
eslint . --ext .js,.ts,.jsx,.tsx
pylint **/*.py --errors-only
```

### 🛡️ **SECURITY FOCUS**
- Automated vulnerability scanning
- Secret detection and exposure prevention
- Configuration security validation
- Dependency security assessment
- OWASP compliance checking

### ⚡ **PERFORMANCE VALIDATION**
- Bundle size analysis and optimization
- Database query efficiency review
- Caching strategy validation
- Resource allocation assessment
- Load testing baseline verification

### 🔧 **CI/CD INTEGRATION**
Generates CI/CD pipeline integration:
- GitHub Actions workflow validation
- Pre-commit hook configuration
- Deployment gate automation
- Monitoring and alerting setup

## Analysis Rules
- **Mark as FAIL** if ANY critical blocker exists
- **Zero tolerance** for exposed secrets or high-severity security issues
- **Exact file:line references** for each issue identified
- **Copy-paste fix commands**, not explanations
- **Severity flagging**: 🔴CRITICAL 🟠HIGH 🟡MEDIUM
- **Stack-aware analysis** - skips irrelevant checks
- **Ruthless standards** - production failures cost money and reputation

## Integration Features
- **Automated repository scanning** with tree structure analysis
- **Dependency manifest parsing** (package.json, requirements.txt, etc.)
- **Environment configuration validation** (.env, docker-compose.yml, etc.)
- **Migration status verification** across all supported frameworks
- **Build process validation** with optimization recommendations
- **Test execution monitoring** with coverage analysis

**Mission Philosophy**: "Better to catch it in development than explain it to customers. Zero tolerance for production failures."