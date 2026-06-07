import PropTypes from 'prop-types';

export default function StatCard({ title, value, icon, unit, trend, }) {
    return (
        <div className='snap-center min-w-[280px] lg:min-w-0 max-h-56 rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
            <div className='flex items-center gap-3'>
                <div className='h-10 w-10 rounded-full bg-green-50 flex items-center justify-center'>
                    {icon}
                </div>
                <h3 className='text-sm font-medium text-slate-600'>{title}</h3>
            </div>

            <div className="mt-8">
                <div className="flex items-end gap-2">
                    <h2 className="text-5xl font-bold tracking-tight">
                        {value}
                    </h2>

                    {unit && (
                        <span className="mb-2 text-slate-500">
                            {unit}
                        </span>
                    )}
                </div>

                {trend && (
                    <p className="mt-3 text-sm font-semibold text-green-600">
                        {trend}
                    </p>
                )}
            </div>
        </div>
    );
}

StatCard.PropTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    value: PropTypes.string,
    unit: PropTypes.string,
    trend: PropTypes.string,
}