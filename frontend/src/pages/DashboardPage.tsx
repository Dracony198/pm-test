import { useAppSelector } from '@/store/hooks';
import { Card, CardHeader, CardBody } from '@/components/common';
import { 
  Calendar, 
  CheckSquare, 
  Users, 
  TrendingUp,
  Clock
} from 'lucide-react';

export const DashboardPage = () => {
  const { user } = useAppSelector((state) => state.auth);

  const stats = [
    {
      title: 'Jami navbatchiliklar',
      value: '12',
      icon: Calendar,
      color: 'bg-blue-500',
      change: '+2.5%',
    },
    {
      title: 'Bajarilgan vazifalar',
      value: '45',
      icon: CheckSquare,
      color: 'bg-green-500',
      change: '+12%',
    },
    {
      title: 'Faol talabalar',
      value: '156',
      icon: Users,
      color: 'bg-purple-500',
      change: '+5%',
    },
    {
      title: 'Kutilayotgan',
      value: '8',
      icon: Clock,
      color: 'bg-orange-500',
      change: '-3%',
    },
  ];

  const upcomingDuties = [
    { date: '2026-02-15', students: ['Alisher Karimov', 'Dilshod Tursunov'], status: 'Bugun' },
    { date: '2026-02-16', students: ['Nodira Rahimova', 'Zarina Qosimova'], status: 'Ertaga' },
    { date: '2026-02-17', students: ['Javohir Alimov', 'Shaxzod Usmonov'], status: '3 kun' },
  ];

  const recentTasks = [
    { id: 1, title: 'Koridor tozalash', status: 'Bajarildi', priority: 'high' },
    { id: 2, title: 'Tualet nazorati', status: 'Jarayonda', priority: 'medium' },
    { id: 3, title: 'Oshxona tekshiruvi', status: 'Kutilmoqda', priority: 'low' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Xush kelibsiz, {user?.firstName}! 👋
        </h1>
        <p className="text-blue-100">
          Bugun sizda 3 ta navbatchilik va 5 ta vazifa bor
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardBody>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Yaqin navbatchiliklar
              </h2>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {upcomingDuties.map((duty, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {duty.status}
                      </span>
                      <span className="text-xs text-gray-500">
                        {duty.date}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {duty.students.join(', ')}
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Ko'rish
                  </button>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                So'nggi vazifalar
              </h2>
              <CheckSquare className="w-5 h-5 text-gray-400" />
            </div>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {recentTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        task.priority === 'high'
                          ? 'bg-red-500'
                          : task.priority === 'medium'
                          ? 'bg-yellow-500'
                          : 'bg-green-500'
                      }`}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {task.title}
                      </p>
                      <p className="text-xs text-gray-500">{task.status}</p>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Batafsil
                  </button>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900">
            Tez harakatlar
          </h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="p-4 bg-primary-50 hover:bg-primary-100 rounded-lg transition-colors text-center">
              <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">
                Navbatchilik qo'shish
              </p>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors text-center">
              <CheckSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">
                Vazifa yaratish
              </p>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">
                Talabalar
              </p>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors text-center">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-gray-900">
                Hisobot ko'rish
              </p>
            </button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
