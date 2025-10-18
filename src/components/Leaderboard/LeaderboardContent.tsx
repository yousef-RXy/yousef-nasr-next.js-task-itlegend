import { motion } from 'framer-motion';
import { IoTrophy } from 'react-icons/io5';

const LeaderboardContent = () => {
  const leaderboardData = [
    { rank: 1, name: 'أحمد محمد', score: 950, avatar: '🏆' },
    { rank: 2, name: 'فاطمة علي', score: 920, avatar: '🥈' },
    { rank: 3, name: 'محمود حسن', score: 890, avatar: '🥉' },
    { rank: 4, name: 'نور الدين', score: 850, avatar: '👤' },
    { rank: 5, name: 'سارة أحمد', score: 820, avatar: '👤' },
    { rank: 6, name: 'عمر خالد', score: 800, avatar: '👤' },
    { rank: 7, name: 'ليلى سعيد', score: 780, avatar: '👤' },
    { rank: 8, name: 'يوسف عبدالله', score: 750, avatar: '👤' },
  ];

  const currentUser = {
    rank: 15,
    name: 'أنت',
    score: 650,
    percentage: 63,
  };

  const getMotivationalMessage = (percentage: number) => {
    if (percentage >= 90) {
      return {
        emoji: '🔥',
        message: 'ممتاز جدًا! أنت في القمة، استمر على هذا المستوى الرائع!',
      };
    } else if (percentage >= 75) {
      return {
        emoji: '💪',
        message: 'أداء رائع! أنت قريب جدًا من القمة، استمر في التقدم!',
      };
    } else if (percentage >= 60) {
      return {
        emoji: '👍',
        message: 'جيد جدًا! لكن يمكنك أن تكون أفضل، زد من جهدك قليلاً!',
      };
    } else if (percentage >= 40) {
      return {
        emoji: '💡',
        message: 'لازم تركز أكتر! أنت قادر على تحقيق نتائج أفضل بكثير.',
      };
    } else {
      return {
        emoji: '⚠️',
        message: 'انتبه! مستواك يحتاج لتحسين كبير، شد حيلك ولا تستسلم!',
      };
    }
  };

  const motivationalContent = getMotivationalMessage(currentUser.percentage);

  return (
    <div className="space-y-6" dir="rtl">
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 flex items-start gap-4">
        <div className="text-4xl">{motivationalContent.emoji}</div>
        <div className="flex-1">
          <p className="text-gray-800 leading-relaxed text-base">
            <span className="font-semibold">كلمة من على شاهين:</span>{' '}
            {motivationalContent.message}
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-blue-600">
              #{currentUser.rank}
            </div>
            <div className="text-3xl">👤</div>
            <div>
              <div className="font-semibold text-gray-900">
                {currentUser.name}
              </div>
              <div className="text-sm text-gray-600">
                حققت نسبة {currentUser.percentage}٪ من إجمالي المحاضرة. جيد،
                استمر في التقدم!
              </div>
            </div>
          </div>
          <div className="text-2xl font-bold text-blue-600">
            {currentUser.score}
          </div>
        </div>
      </div>

      <div className="text-center py-2">
        <h3 className="text-lg font-bold text-gray-700">
          Course Name Shown Here
        </h3>
        <div className="text-sm text-gray-500 mt-1">Leaderboard</div>
      </div>

      <div className="space-y-3">
        {leaderboardData.map((user, index) => (
          <motion.div
            key={user.rank}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex items-center justify-between p-4 rounded-lg transition-all ${
              user.rank <= 3
                ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300'
                : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-4 flex-1">
              <div
                className={`text-xl font-bold ${
                  user.rank === 1
                    ? 'text-yellow-600'
                    : user.rank === 2
                    ? 'text-gray-500'
                    : user.rank === 3
                    ? 'text-orange-600'
                    : 'text-gray-600'
                }`}
              >
                #{user.rank}
              </div>
              <div className="text-3xl">{user.avatar}</div>
              <div className="font-semibold text-gray-900">{user.name}</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xl font-bold text-gray-700">
                {user.score}
              </div>
              {user.rank <= 3 && (
                <IoTrophy className="text-yellow-500 text-xl" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardContent;
