import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { registerUser } from '@/features/auth/authSlice';
import { Button, Input } from '@/components/common';
import { Mail, Lock, User, Phone, Home, CreditCard } from 'lucide-react';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    studentId: '',
    roomNumber: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName) newErrors.firstName = 'Ism kiriting';
    if (!formData.lastName) newErrors.lastName = 'Familiya kiriting';

    if (!formData.email) {
      newErrors.email = 'Email kiriting';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email noto'g'ri formatda";
    }

    if (!formData.password) {
      newErrors.password = 'Parol kiriting';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Parol kamida 8 ta belgidan iborat bo\'lishi kerak';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Parollar mos kelmayapti';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const { confirmPassword, ...registerData } = formData;
      await dispatch(registerUser(registerData)).unwrap();
      navigate('/dashboard');
    } catch (error) {
      // Error handled by slice
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Ro'yxatdan o'tish
        </h2>
        <p className="text-gray-600">
          Yangi hisob yarating
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            name="firstName"
            label="Ism"
            placeholder="Ism"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
            leftIcon={<User className="w-5 h-5" />}
            disabled={isLoading}
          />

          <Input
            name="lastName"
            label="Familiya"
            placeholder="Familiya"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
            leftIcon={<User className="w-5 h-5" />}
            disabled={isLoading}
          />
        </div>

        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="sizning@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          leftIcon={<Mail className="w-5 h-5" />}
          disabled={isLoading}
        />

        <div className="grid grid-cols-2 gap-4">
          <Input
            name="studentId"
            label="Talaba ID (ixtiyoriy)"
            placeholder="ST12345"
            value={formData.studentId}
            onChange={handleChange}
            leftIcon={<CreditCard className="w-5 h-5" />}
            disabled={isLoading}
          />

          <Input
            name="roomNumber"
            label="Xona raqami (ixtiyoriy)"
            placeholder="301"
            value={formData.roomNumber}
            onChange={handleChange}
            leftIcon={<Home className="w-5 h-5" />}
            disabled={isLoading}
          />
        </div>

        <Input
          type="tel"
          name="phone"
          label="Telefon (ixtiyoriy)"
          placeholder="+998 90 123 45 67"
          value={formData.phone}
          onChange={handleChange}
          leftIcon={<Phone className="w-5 h-5" />}
          disabled={isLoading}
        />

        <Input
          type="password"
          name="password"
          label="Parol"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          leftIcon={<Lock className="w-5 h-5" />}
          disabled={isLoading}
          helperText="Kamida 8 ta belgi"
        />

        <Input
          type="password"
          name="confirmPassword"
          label="Parolni tasdiqlang"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          leftIcon={<Lock className="w-5 h-5" />}
          disabled={isLoading}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isLoading}
        >
          Ro'yxatdan o'tish
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Hisobingiz bormi?{' '}
          <Link
            to="/login"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Kirish
          </Link>
        </p>
      </div>
    </div>
  );
};
