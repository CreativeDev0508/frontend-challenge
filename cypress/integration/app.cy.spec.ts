describe('PatientList', () => {
  it('displays a shimmer patient list while loading', () => {
    cy.visit('/')
      .get('[data-test="shimmer-list"]')
      .should('exist')
      .get('[data-test="load-more-button"]')
      .should('be.disabled')
    cy.get('[data-test="shimmer-list"]').should('not.exist')
  })

  it('renders a list of patients', () => {
    cy.get('[data-test="name"]').should('have.length', 50)
  })

  it('loads more patients', () => {
    cy.get('[data-test="load-more-button"]')
      .click()
      .get('[data-test="load-more-button"]')
      .should('be.disabled')
      .get('[data-test="name"]')
      .should('have.length', 100)
  })
})

describe('SearchBar', () => {
  it('filters patients by name on name search', () => {
    cy.get('[data-test="searchbar"]')
      .type('barbara')
      .get('[data-test="search-button"]')
      .click()
      .get('[data-test="name"]')
      .contains('Barbara Douglas')
  })

  it('filters patients by nationality on country name search', () => {
    cy.get('[data-test="searchbar"]')
      .clear()
      .type('brazil')
      .get('[data-test="search-button"]')
      .click()
      .get('[data-test="name"]')
      .contains('Maeve Barros')
  })
})

describe('GenderFilter', () => {
  it('displays only females', () => {
    cy.get('[data-test="searchbar"]')
      .clear()
      .get('[data-test="search-button"]')
      .click()
      .get('[data-test="female-tag"]')
      .click()
      .get('[data-test="name"]')
      .should('have.length', 47)
  })

  it('displays only males', () => {
    cy.get('[data-test="male-tag"]')
      .click()
      .get('[data-test="name"]')
      .should('have.length', 53)
  })

  it('displays all patients', () => {
    cy.get('[data-test="all-tag"]')
      .click()
      .get('[data-test="name"]')
      .should('have.length', 100)
  })
})

describe('PatientDetails', () => {
  it('displays patient details modal', () => {
    cy.get('[data-test="name"]')
      .contains('Leonardo Nystad')
      .parent()
      .find('[data-test="details-button"]')
      .click()
      .get('[data-test="patient-details"]')
      .contains('FN - 05067837713')
      .get('[data-test="close-button"]')
      .click()
      .should('not.exist')
  })
})

describe('Accessibity', () => {
  it('loads more patients', () => {
    cy.get('[data-test="load-more-button"]')
      .focus()
      .type('{enter}')
      .get('[data-test="load-more-button"]')
      .should('be.disabled')
      .get('[data-test="name"]')
      .should('have.length', 150)
  })

  it('searches, filters and opens patient details using only the keyboard', () => {
    cy.get('[data-test="searchbar"]')
      .focus()
      .clear()
      .type('brazil{enter}')
      .clear()
      .type('spain')
      .get('[data-test="search-button"]')
      .focus()
      .type('{enter}')
      .get('[data-test="female-tag"]')
      .focus()
      .type('{enter}')
      .get('[data-test="name"]')
      .contains('Josefa Fuentes')
      .parent()
      .find('[data-test="details-button"]')
      .focus()
      .type('{enter}')
      .get('[data-test="patient-details"]')
      .contains('DNI - 45826390-S')
      .get('[data-test="close-button"]')
      .focus()
      .type('{enter}')
      .get('[data-test="patient-details"]')
      .should('not.exist')
  })
})
