module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    // Allow Tailwind's custom at-rules used in `index.css`
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer', 'base', 'components', 'utilities'
      ]
    }]
  }
}
