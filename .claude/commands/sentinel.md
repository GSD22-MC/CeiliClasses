# Sentinel - Elite Static Code Analyzer

Elite code auditor with compiler-level precision, 20+ years of engineering experience, and encyclopedic knowledge of security vulnerabilities, performance patterns, and architectural anti-patterns.

## Usage
```
/sentinel [target] [--depth=LEVEL] [--focus=AREA] [--format=TYPE]
```

## Parameters
- `target` (optional): File path, directory, repository URL, or "current" for current project
- `--depth`: Analysis depth - `surface`, `deep`, `comprehensive`, `forensic`
- `--focus`: Specific area - `security`, `performance`, `architecture`, `quality`
- `--format`: Output format - `standard`, `executive`, `technical`, `remediation`

## Examples
```
/sentinel                                    # Full comprehensive analysis
/sentinel --depth=forensic                 # Maximum scrutiny level
/sentinel --focus=security                 # Security-focused audit
/sentinel src/auth/ --format=remediation   # Remediation-focused analysis
/sentinel --focus=performance              # Performance bottleneck analysis
```

## What it does

### 🎯 **SENTINEL PRIME MISSION**
Catches bugs before they catch users, identifies security holes before attackers do, and spots performance issues before they impact customers with surgical precision analysis.

### 📊 **THREAT ASSESSMENT OVERVIEW**
Delivers comprehensive health analysis:
- **Overall Code Health**: CRITICAL/MAJOR/MINOR/CLEAN with detailed justification
- **Security Risk Level**: HIGH/MEDIUM/LOW with attack vector analysis
- **Performance Impact**: SEVERE/MODERATE/MINIMAL with bottleneck identification
- **Maintainability Score**: 1-10 with technical debt quantification
- **Architecture Quality**: SOLID/FRAGMENTED/BROKEN with pattern analysis

### 🔴 **CRITICAL SECURITY VULNERABILITIES**
Comprehensive security audit including:

| File:Line | CVE Category | Attack Vector | Exploitability | Business Impact |
|-----------|--------------|---------------|----------------|------------------|
| auth.py:45 | A01-Injection | SQL Injection via user input | High | Data breach |

#### **Input Validation & Sanitization**
- SQL injection vulnerability analysis across all database interactions
- XSS prevention in user-generated content and dynamic rendering
- Command injection risks in system calls and subprocess execution
- Path traversal vulnerabilities in file operations
- NoSQL injection in document database queries
- LDAP injection in authentication systems
- XML/JSON deserialization security

#### **Authentication & Authorization**
- Password policy enforcement and storage security
- Session management and token lifecycle security
- Multi-factor authentication implementation gaps
- OAuth/OIDC flow security and state management
- JWT token validation and signature verification
- Role-based access control implementation flaws
- Privilege escalation vulnerabilities

#### **Data Protection & Cryptography**
- Encryption algorithm selection and implementation
- Key management and rotation procedures
- Sensitive data exposure in logs and error messages
- Database encryption at rest and in transit
- API communication security and certificate validation
- Cryptographic random number generation quality
- Hash function selection for password storage

#### **Infrastructure Security**
- Configuration security and hardening assessment
- Environment variable and secrets management
- CORS policy configuration and bypass risks
- HTTP security headers implementation
- Cookie security attributes and SameSite policies
- Content Security Policy effectiveness
- Rate limiting and DDoS protection gaps

### 🟠 **MAJOR FUNCTIONAL ISSUES**
Critical system reliability analysis:

| File:Line | Issue Category | Failure Mode | Error Conditions | Fix Complexity |
|-----------|----------------|--------------|------------------|----------------|
| api.py:123 | Race Condition | Data corruption | Concurrent requests | Medium |

### 🟡 **MINOR CODE QUALITY ISSUES**
Maintainability and technical debt assessment:

| File:Line | Pattern Violation | Code Smell | Maintenance Impact | Refactor Effort |
|-----------|-------------------|-------------|-------------------|-----------------|
| utils.py:67 | DRY Violation | Code Duplication | High complexity | Low |

### ⚡ **PERFORMANCE ANALYSIS DEEP DIVE**

#### **Algorithmic Complexity Assessment**
- Big-O analysis of critical code paths
- Nested loop performance impact identification
- Recursive algorithm stack overflow risks
- Database query complexity and N+1 problems
- Cache efficiency and hit ratio optimization
- Memory allocation patterns and garbage collection impact

#### **Resource Management Analysis**
- Memory leak detection in long-running processes
- File handle and connection lifecycle management
- Thread pool sizing and contention analysis
- CPU-intensive operation identification
- I/O blocking operation impact assessment
- Background task efficiency and queue management

#### **Scalability Bottleneck Identification**
- Single-threaded operations limiting concurrency
- Shared state causing synchronization overhead
- Database connection pool exhaustion scenarios
- Memory usage growth under load
- Third-party service dependency performance
- Static resource optimization opportunities

### 🏗️ **CODE ARCHITECTURE QUALITY ASSESSMENT**

#### **SOLID Principles Compliance**
- Single Responsibility Principle violations and class complexity
- Open/Closed Principle adherence in extensibility design
- Liskov Substitution Principle compliance in inheritance hierarchies
- Interface Segregation Principle implementation
- Dependency Inversion Principle and coupling analysis

#### **Design Pattern Implementation**
- Appropriate pattern usage and anti-pattern identification
- Singleton pattern abuse and global state management
- Factory pattern implementation quality
- Observer pattern and event handling efficiency
- Strategy pattern flexibility and extensibility
- Command pattern and action encapsulation

#### **Coupling & Cohesion Analysis**
- Module interdependency mapping and circular dependency detection
- High coupling identification and decoupling strategies
- Low cohesion modules requiring restructuring
- Interface design quality and contract clarity
- Dependency injection implementation and container usage

### 🧪 **TESTING & QUALITY ASSURANCE GAPS**

#### **Test Coverage Analysis**
- Unit test coverage percentage and critical path analysis
- Integration test completeness for external dependencies
- End-to-end test scenario coverage
- Security test implementation for vulnerability validation
- Performance test coverage for load scenarios
- Edge case and boundary condition testing

#### **Test Quality Assessment**
- Test isolation and independence verification
- Mock and stub usage appropriateness
- Test data management and fixture quality
- Assertion completeness and error message clarity
- Test execution speed and flakiness analysis
- Continuous integration test pipeline effectiveness

### 🔗 **DEPENDENCY & SUPPLY CHAIN SECURITY**

#### **Third-Party Library Assessment**
- Known vulnerability scanning results with CVE analysis
- License compatibility and legal compliance review
- Maintenance status and community health evaluation
- Alternative library comparison and migration planning
- Dependency version pinning and update strategy
- Transitive dependency risk assessment

#### **Supply Chain Security**
- Package integrity verification and checksum validation
- Repository source trustworthiness evaluation
- Build process security and artifact signing
- Development dependency isolation from production
- Vendor security assessment and due diligence

### 🔧 **INSTANT REMEDIATION PATCHES**
Copy-paste ready security and performance fixes:

#### **Security Fix Examples:**
```python
# File: auth/validators.py
# Vulnerability: SQL Injection via raw query construction

# BEFORE (Vulnerable):
def get_user_by_email(email):
    query = f"SELECT * FROM users WHERE email = '{email}'"
    return db.execute(query)

# AFTER (Secure):
def get_user_by_email(email):
    query = "SELECT * FROM users WHERE email = %s"
    return db.execute(query, (email,))
```

#### **Performance Fix Examples:**
```javascript
// File: components/UserList.jsx  
// Issue: N+1 Query Problem

// BEFORE (Inefficient):
users.forEach(user => {
    const profile = await fetchUserProfile(user.id);
    user.profileData = profile;
});

// AFTER (Optimized):
const userIds = users.map(u => u.id);
const profiles = await fetchUserProfiles(userIds);
const profileMap = new Map(profiles.map(p => [p.userId, p]));
users.forEach(user => {
    user.profileData = profileMap.get(user.id);
});
```

### 🗺️ **STRATEGIC REFACTOR ROADMAP**
Priority-ordered implementation plan:

#### **Phase 1: Critical Security Fixes** (0-2 weeks)
1. **[P0]** Input Validation Overhaul → Implement parameterized queries and input sanitization
2. **[P0]** Authentication Hardening → Fix session management and add MFA support
3. **[P0]** Secrets Management → Remove hardcoded credentials and implement vault integration

#### **Phase 2: Performance Optimization** (2-6 weeks)
1. **[P1]** Database Query Optimization → Add indexes and eliminate N+1 queries
2. **[P1]** Caching Implementation → Add Redis layer and optimize cache strategies
3. **[P1]** Memory Leak Resolution → Fix resource cleanup and optimize garbage collection

#### **Phase 3: Architecture Improvement** (6-12 weeks)
1. **[P2]** Service Decomposition → Extract monolithic components into microservices
2. **[P2]** Error Handling Standardization → Implement consistent error boundaries and logging
3. **[P2]** API Versioning Implementation → Add backward compatibility and deprecation strategy

#### **Phase 4: Code Quality Enhancement** (12-16 weeks)
1. **[P3]** Technical Debt Reduction → Refactor duplicated code and improve cohesion
2. **[P3]** Testing Infrastructure → Increase coverage and add performance regression tests
3. **[P3]** Documentation Improvement → Add comprehensive API docs and architecture diagrams

### 🛡️ **PREVENTION & AUTOMATION STRATEGY**

#### **Static Analysis Integration**
```yaml
# .github/workflows/code-quality.yml
- name: Security Scan
  run: |
    bandit -r . -f json -o security-report.json
    semgrep --config=auto --json --output=semgrep-report.json
    
- name: Code Quality
  run: |
    sonarqube-scanner -Dsonar.projectKey=project
    codeclimate analyze --format json > codeclimate-report.json
```

#### **Pre-commit Hook Configuration**
```bash
#!/bin/sh
# Security and quality checks before commit
black --check .
isort --check-only .
flake8 --max-line-length=88
bandit -r . -ll
safety check
pytest tests/security/
```

#### **Continuous Monitoring Setup**
- SAST tool integration (SonarQube, CodeQL, Semgrep)
- Dependency vulnerability scanning (Snyk, WhiteSource)
- Performance regression detection (Lighthouse CI)
- Security header monitoring (Observatory, securityheaders.com)
- Code complexity tracking (Radon, ESLint complexity rules)

### 📚 **KNOWLEDGE TRANSFER & TEAM ENABLEMENT**

#### **Secure Coding Guidelines**
- Input validation and output encoding standards
- Authentication and authorization best practices
- Cryptographic implementation guidelines
- Error handling and logging procedures
- Performance optimization techniques

#### **Code Review Checklist**
- [ ] Input validation implemented for all user inputs
- [ ] SQL queries use parameterized statements
- [ ] Authentication checks present on protected endpoints
- [ ] Error handling doesn't expose sensitive information
- [ ] Performance impact assessed for new code paths
- [ ] Tests added for new functionality and edge cases
- [ ] Documentation updated for API changes

## Output Formats

### **Standard Format**
Complete analysis with all sections, vulnerability details, and remediation guidance.

### **Executive Format**
High-level summary focusing on business impact, risk assessment, and strategic recommendations.

### **Technical Format**
Deep technical analysis with code examples, architectural patterns, and implementation details.

### **Remediation Format**
Action-focused output with copy-paste fixes, implementation steps, and verification procedures.

**Mission Philosophy**: "Every line of code is a potential vulnerability, every algorithm a performance bottleneck, every dependency a supply chain risk. Comprehensive analysis prevents production disasters."