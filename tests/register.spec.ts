import { test, expect } from '@playwright/test';

test.describe('Partner Registration Flow', () => {
  test('should complete the entire registration flow and submit successfully', async ({ page }) => {
    await page.goto('/register'); // the route for the register component

    // ----- Step 1: Login Info -----
    await expect(page.locator('text=Login Information').first()).toBeVisible();
    await page.fill('input[name="username"]', 'test_partner');
    await page.fill('input[name="password"]', 'EkamBond123!');
    await page.fill('input[name="confirm_password"]', 'EkamBond123!');
    await page.click('button:has-text("Next")');

    // ----- Step 2: Business Info -----
    await expect(page.locator('text=Business Information').first()).toBeVisible();
    await page.fill('input[name="business_name"]', 'Awesome Matrimony Inc.');
    await page.fill('input[name="alias"]', 'awesomematrimony');
    await page.fill('input[name="business_email"]', 'contact@awesomematrimony.com');
    await page.fill('input[name="business_registration_number"]', 'REG-987654321');
    await page.fill('input[name="business_ITIN"]', '12-3456789');
    await page.fill('textarea[name="business_description"]', 'Premium matchmaking service for global partners.');
    await page.click('button:has-text("Next")');

    // ----- Step 3: Address & Contact -----
    await expect(page.locator('text=Address & Contact').first()).toBeVisible();
    await page.fill('input[name="address_line1"]', '123 Tech Boulevard');
    await page.fill('input[name="city"]', 'San Francisco');
    
    // Country & State use <select> elements, we select by value. 
    // Country 1 = United States
    await page.selectOption('select[name="country"]', '1');
    // State 41 = California (from STATES_BY_COUNTRY)
    await page.selectOption('select[name="state"]', '41');
    
    await page.fill('input[name="zip"]', '94105');
    // Primary phone country code 1 = United States (+1)
    await page.selectOption('select[name="primary_phone_country_code"]', '1');
    await page.fill('input[name="primary_phone"]', '1234567890');
    // Secondary phone is optional, but testing fill anyway
    await page.fill('input[name="secondary_phone"]', '0987654321');
    
    await page.click('button:has-text("Next")');

    // ----- Step 4: Primary Contact -----
    await expect(page.locator('text=Primary Contact Person').first()).toBeVisible();
    await page.fill('input[name="primary_contact_first_name"]', 'John');
    await page.fill('input[name="primary_contact_last_name"]', 'Doe');
    await page.fill('input[name="primary_contact_email"]', 'john.doe@awesomematrimony.com');
    
    // Gender 1 = Male
    await page.selectOption('select[name="primary_contact_gender"]', '1');
    await page.fill('input[name="primary_contact_date_of_birth"]', '1990-01-01');
    
    await page.click('button:has-text("Next")');

    // ----- Step 5: Online Presence -----
    await expect(page.locator('text=Online Presence').first()).toBeVisible();
    await page.fill('input[name="business_website"]', 'https://www.awesomematrimony.com');
    await page.fill('input[name="domain_root_url"]', 'https://app.awesomematrimony.com');
    await page.fill('input[name="business_linkedin"]', 'https://linkedin.com/company/awesomematrimony');
    await page.fill('input[name="business_facebook"]', 'https://facebook.com/awesomematrimony');
    await page.fill('input[name="business_whatsapp"]', '+11234567890');
    
    // The nav button here says Preview
    await page.click('button:has-text("Preview")');

    // ----- Step 6: Preview -----
    await expect(page.locator('text=Preview Information')).toBeVisible();
    
    // Verify some values made it to the preview
    await expect(page.locator('text=Awesome Matrimony Inc.')).toBeVisible();
    await expect(page.locator('text=contact@awesomematrimony.com')).toBeVisible();
    await expect(page.locator('text=test_partner')).toBeVisible();
    
    // Submitting the API creates a POST call. We can mock it to ensure tests stay self-contained and don't hit real DBs,
    // or just let it hit the local mock endpoint if there is one. 
    // Playwright allows intercepting routes:
    await page.route('/api/register-partner', async route => {
      const json = { success: true };
      await route.fulfill({ json });
    });

    await page.click('button:has-text("Submit Enquiry")');

    // ----- Success State -----
    await expect(page.locator('text=Enquiry Received!')).toBeVisible({ timeout: 10000 });
  });

  test('should enforce validation before proceeding', async ({ page }) => {
    await page.goto('/register');
    
    // Try to advance without filling required fields
    await page.click('button:has-text("Next")');
    
    // Verify validation message triggers
    await expect(page.locator('text=Username is required')).toBeVisible();
    await expect(page.locator('text=Password is required')).toBeVisible();
  });
});
