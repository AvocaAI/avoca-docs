export const changelogData = {
  "releases": [
    {
      "date": "August 8th, 2025",
      "product": "Coach",
      "features": [
        {
          "title": "Customer Search Bar",
          "author": "Dragos",
          "description": "Basic search functionality for finding customers",
          "items": [
            {
              "label": "Search by Name or Phone",
              "description": "Type to find matching customers"
            },
            {
              "label": "Dropdown Results",
              "description": "See matches as you type"
            },
            {
              "label": "View Profile",
              "description": "Click to see customer details"
            },
            {
              "label": "Customer Info",
              "description": "Shows booking history, contact info, and notes"
            },
            {
              "label": "Faster Lookup",
              "description": "Saves time finding customer records"
            }
          ]
        },
        {
          "title": "Call Volume Graph",
          "author": "Tanmay",
          "description": "Simple graph showing daily call data",
          "items": [
            {
              "label": "Daily Call Count",
              "description": "See how many calls came in each day"
            },
            {
              "label": "Stacked Bar Chart",
              "description": "View by type or booking status"
            },
            {
              "label": "Daily Stats",
              "description": "Shows total calls, bookable calls, booked appointments"
            },
            {
              "label": "Booking Gaps",
              "description": "See difference between bookable and booked"
            },
            {
              "label": "Basic Trends",
              "description": "View patterns over time"
            }
          ]
        }
      ]
    },
    {
      "date": "August 8th, 2025",
      "product": "Speed-to-Lead",
      "features": [
        {
          "title": "Speed to Lead Texting",
          "author": "Team",
          "description": "Enhanced lead engagement with automated text messaging",
          "items": [
            {
              "label": "Call First, Text on No Answer",
              "description": "Automatically initiates a call, and if there's no pickup, sends a 2-way bookable text"
            },
            {
              "label": "Smart Follow-up",
              "description": "Intelligent prompting to guide prospects toward booking appointments"
            },
            {
              "label": "Seamless Booking Integration",
              "description": "Direct booking capabilities within the text conversation"
            },
            {
              "label": "Response Tracking",
              "description": "Monitor text engagement and conversion rates"
            }
          ],
          "note": "Optional feature to initiate with text before calling is planned for future release."
        }
      ]
    },
    {
      "date": "August 8th, 2025",
      "product": "Outbound Campaigns",
      "features": [
        {
          "title": "Outbound Maintenance Texting",
          "author": "Team",
          "description": "Goal-based texting campaigns for maintenance and follow-ups",
          "items": [
            {
              "label": "Batch Text Campaigns",
              "description": "Send 2-way bookable texts in controlled batches"
            },
            {
              "label": "Goal-Based Progression",
              "description": "Check campaign goals before sending next batch"
            },
            {
              "label": "Smart Scheduling",
              "description": "Configure optimal send times for your audience"
            },
            {
              "label": "Retry via Call",
              "description": "Fallback to phone calls for non-responsive text recipients"
            },
            {
              "label": "Performance Tracking",
              "description": "Monitor batch performance and goal achievement"
            }
          ],
          "note": "Successfully demoed with Golden Rule on August 6th."
        }
      ]
    },
    {
      "date": "August 8th, 2025",
      "product": "SMS",
      "features": [
        {
          "title": "Texting Infrastructure",
          "author": "Team",
          "description": "Major infrastructure improvements for texting capabilities",
          "items": [
            {
              "label": "Multi-Tenant Awareness",
              "description": "All texts now properly handle existing Twilio tenant vs ISV subaccount configurations"
            },
            {
              "label": "Messaging Service Integration",
              "description": "Twilio Messaging Service SIDs work seamlessly without manual intervention"
            },
            {
              "label": "Use Case Mapping",
              "description": "Phone numbers are intelligently mapped to specific use cases"
            },
            {
              "label": "Phone Number Provisioning",
              "description": "New admin console for easier number management"
            },
            {
              "label": "Split Tenant Support",
              "description": "Customers can have Responder in one tenant and Texting in another"
            }
          ]
        },
        {
          "title": "Texting UI",
          "author": "Team",
          "description": "New user interface for managing text conversations",
          "items": [
            {
              "label": "New Table Flow",
              "description": "Redesigned conversation view for better text management"
            },
            {
              "label": "Enhanced Visibility",
              "description": "Clear overview of all ongoing text conversations"
            },
            {
              "label": "Improved Navigation",
              "description": "Easier access to conversation history and details"
            },
            {
              "label": "Performance Optimized",
              "description": "Faster loading and real-time updates"
            }
          ],
          "note": "Successfully demoed internally on August 4th and 6th."
        }
      ]
    },
    {
      "date": "August 1st, 2025",
      "product": "Simple Scheduler",
      "features": [
        {
          "title": "Simple Scheduler Analytics",
          "author": "Kareem",
          "description": "Comprehensive analytics dashboard for Simple Scheduler",
          "items": [
            {
              "label": "Distinct Sessions Overview",
              "description": "Track unique user sessions"
            },
            {
              "label": "Booking Analytics",
              "description": "Monitor number of booked jobs and average booking duration"
            },
            {
              "label": "Booking Funnel",
              "description": "Understand user drop-off patterns throughout the booking process"
            },
            {
              "label": "Volume Analytics",
              "description": "Compare sessions vs booked jobs over time periods"
            },
            {
              "label": "User Analytics",
              "description": "Identify customer issues and track service areas"
            },
            {
              "label": "Multi-Scheduler Comparison",
              "description": "Compare data across multiple schedulers"
            }
          ]
        },
        {
          "title": "UTM Tracking",
          "author": "Kareem",
          "description": "Track lead sources with UTM parameters",
          "items": [
            {
              "label": "Source Attribution",
              "description": "Track which sources generate leads"
            },
            {
              "label": "Unique Links per Source",
              "description": "Separate links for Facebook, Google, and other channels"
            },
            {
              "label": "Easy Link Builder",
              "description": "Updated admin dashboard for simple UTM link generation"
            },
            {
              "label": "Access via Admin",
              "description": "Available at app.avoca.ai/admin/simple-scheduler under API Keys"
            }
          ]
        }
      ]
    },
    {
      "date": "August 1st, 2025",
      "product": "Speed-to-Lead",
      "features": [
        {
          "title": "Google LSA Integration",
          "author": "Team",
          "description": "Integration with Google Local Services Ads",
          "items": [
            {
              "label": "Lead Import",
              "description": "Automatically pull leads from Google LSA"
            },
            {
              "label": "Outbound Integration",
              "description": "Drop leads into any outbound engine"
            },
            {
              "label": "Speed-to-Lead Priority",
              "description": "STL integration available first"
            },
            {
              "label": "Internal Dashboard",
              "description": "Monitor all imported leads"
            }
          ],
          "note": "Some onboarding setup required for initial configuration."
        }
      ]
    }
  ]
};

export default changelogData;