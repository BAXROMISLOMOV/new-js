const company = {
  name: "Global Tech Solutions",
  headquarters: {
    address: {
      street: "789 Innovation Blvd",
      city: "Tech City",
      state: {
        name: "Innovatia",
        code: "IN"
      },
      country: {
        name: "Technoland",
        code: "TN"
      }
    },
    offices: {
      northAmerica: {
        regionalHead: "Ms. Susan Clarke",
        contact: {
          phone: "456-789-1234",
          email: "susan@globaltech.com"
        },
        departments: {
          software: {
            head: "Mr. John Doe",
            teamLead: {
              name: "Ms. Alice Johnson",
              contact: {
                email: "alice@globaltech.com",
                phone: "456-123-7890"
              }
            }
          },
          hr: {
            head: "Mrs. Sarah Connors",
            teamLead: {
              name: "Mr. Bruce Wayne",
              contact: {
                email: "bruce@globaltech.com",
                phone: "456-456-7899"
              }
            }
          }
        }
      },
      europe: {
        regionalHead: "Mr. Liam O'Sullivan",
        contact: {
          phone: "789-456-3210",
          email: "liam@globaltech.com"
        },
        departments: {
          marketing: {
            head: "Ms. Natasha Romanoff",
            teamLead: {
              name: "Mr. Steve Rogers",
              contact: {
                email: "steve@globaltech.com",
                phone: "123-321-4567"
              }
            }
          },
          finance: {
            head: "Mr. Tony Stark",
            teamLead: {
              name: "Ms. Pepper Potts",
              contact: {
                email: "pepper@globaltech.com",
                phone: "987-654-3210"
              }
            }
          }
        }
      }
    }
  },
  staff: {
    CEO: {
      name: "Mr. Elon Musk",
      experience: "20 years",
      contact: {
        email: "elon@globaltech.com",
        phone: "999-888-7777"
      }
    },
    executives: {
      CTO: {
        name: "Ms. Sheryl Sandberg",
        experience: "18 years",
        contact: {
          email: "sheryl@globaltech.com",
          phone: "555-555-5555"
        }
      },
      CFO: {
        name: "Mr. Warren Buffett",
        experience: "25 years",
        contact: {
          email: "warren@globaltech.com",
          phone: "444-444-4444"
        }
      }
    }
  }
};
function displayCompanyInfo(company) {
  console.log(`Company Name: ${company.name}\n`);
  console.log("Headquarters:");
  console.log(`  Address: ${company.headquarters.address.street}, ${company.headquarters.address.city}`);
  console.log(`  State: ${company.headquarters.address.state.name} (${company.headquarters.address.state.code})`);
  console.log(`  Country: ${company.headquarters.address.country.name} (${company.headquarters.address.country.code})\n`);

  console.log("Offices:");
  Object.keys(company.headquarters.offices).forEach(region => {
    const office = company.headquarters.offices[region];
    console.log(`  ${region[0].toUpperCase() + region.slice(1)}:`);
    console.log(`    Regional Head: ${office.regionalHead}`);
    console.log(`    Contact: ${office.contact.phone}, ${office.contact.email}`);

    console.log("    Departments:");
    Object.keys(office.departments).forEach(department => {
      const dept = office.departments[department];
      console.log(`      ${department[0].toUpperCase() + department.slice(1)}:`);
      console.log(`        Head: ${dept.head}`);
      console.log(`        Team Lead: ${dept.teamLead.name}`);
      console.log(`        Contact: ${dept.teamLead.contact.phone}, ${dept.teamLead.contact.email}`);
    });
  });

  console.log("nStaff:");
  console.log(`  CEO: ${company.staff.CEO.name}, Experience: ${company.staff.CEO.experience}`);
  console.log(`    Contact: ${company.staff.CEO.contact.phone}, ${company.staff.CEO.contact.email}`);

  console.log("  Executives:");
  Object.keys(company.staff.executives).forEach(execRole => {
    const exec = company.staff.executives[execRole];
    console.log(`    ${execRole}: ${exec.name}, Experience: ${exec.experience}`);
    console.log(`      Contact: ${exec.contact.phone}, ${exec.contact.email}`);
  });
}


displayCompanyInfo(company);

