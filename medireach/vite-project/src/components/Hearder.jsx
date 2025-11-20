import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './AppIcon';
import Button from './ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/virtual-consultation-suite', label: 'Virtual Consultation', icon: 'Video' },
    { path: '/care-coordination-hub', label: 'Care Coordination', icon: 'Users' },
    { path: '/wellness-companion', label: 'Wellness', icon: 'Heart' },
    { path: '/emergency-response-center', label: 'Emergency', icon: 'AlertCircle' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="header-logo">
            <div className="header-logo-icon">
              <Icon name="Activity" size={24} color="white" />
            </div>
            <span className="header-logo-text">MediReach</span>
          </Link>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Button
              variant="ghost"
              size="sm"
              iconName="Bell"
              iconPosition="left"
              className="hidden lg:flex"
            >
              Notifications
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Now
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="header-mobile-toggle"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <>
          <div
            className="mobile-menu-overlay"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <div className="header-logo">
                <div className="header-logo-icon">
                  <Icon name="Activity" size={24} color="white" />
                </div>
                <span className="header-logo-text">MediReach</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Close menu"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <nav className="mobile-menu-nav">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.label}</span>
                  </div>
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-border space-y-3">
                <Button
                  variant="ghost"
                  fullWidth
                  iconName="Bell"
                  iconPosition="left"
                  onClick={closeMobileMenu}
                >
                  Notifications
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={closeMobileMenu}
                >
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;