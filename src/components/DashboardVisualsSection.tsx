
const DashboardVisualsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center heading-spacing">
          <h2 className="text-foreground text-spacing">
            Complete <span className="text-primary">Dashboard</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
            Everything you need to manage your property efficiently
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-large p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">See Your Dashboard Live</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Get real-time insights into your property performance. Track occupancy, revenue, and guest satisfaction all in one place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover-lift transition-smooth">
                Start Free Trial
              </button>
              <button className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-smooth">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardVisualsSection;
