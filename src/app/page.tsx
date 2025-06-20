import { Card } from '@/frontend/ui/Card';
import { Title } from '@/frontend/ui/Title';

export default function Home() {
  return (
    <div className="mx-auto max-w-[1442px] py-14">
      <header className="mb-[105px]">
        <Title>тестовое задание</Title>
      </header>
      <main>
        <div className="flex flex-row flex-wrap justify-center gap-5 md:gap-9">
          <Card>
            Отзыв 1 Полученный с api HTML Но всё же должен выглядить красиво, на
            сколько возможно, конечно Но всё же должен выглядить красиво, на
            сколько возможно, конечно Но всё же должен выглядить красиво, на
            сколько возможно, конечно Но всё же должен выглядить красиво, на
            сколько возможно, конечно
          </Card>
          <Card>
            Отзыв 2 HTML Но всё же должен выглядить красиво, на сколько
            возможно, конечно Но всё же должен выглядить красиво, на сколько
            возможно, конечно
            <script>alert(1)</script>
          </Card>
        </div>
      </main>
    </div>
  );
}
